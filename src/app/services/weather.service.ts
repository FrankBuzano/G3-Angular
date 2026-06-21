import { Injectable, signal, computed, effect, untracked } from '@angular/core';
import { httpResource, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface WeatherResponse {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

export type ViewState =
  | 'idle'
  | 'loading'
  | 'not-found'
  | 'network'
  | 'error'
  | 'ready'
  | 'ready-updating'
  | 'ready-stale';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const HISTORY_KEY = 'g3-clima:history:v1';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  readonly city = signal<string | null>(null);
  readonly history = signal<string[]>([]);

  readonly weather = httpResource<WeatherResponse>(() =>
    this.city()
      ? `${BASE_URL}?q=${encodeURIComponent(this.city()!)}&appid=${environment.openWeatherApiKey}&units=metric&lang=es`
      : undefined
  );

  readonly viewState = computed<ViewState>(() => {
    const status = this.weather.status();
    const hasValue = this.weather.hasValue();
    const error = this.weather.error() as HttpErrorResponse | undefined;

    if (status === 'loading' && !hasValue) return 'loading';

    if (status === 'error' && !hasValue) {
      if (error?.status === 404) return 'not-found';
      if (error?.status === 0) return 'network';
      return 'error';
    }

    // Casos con data previa evaluados primero
    if (hasValue && status === 'error') return 'ready-stale';
    if (hasValue && status === 'reloading') return 'ready-updating';

    if (hasValue) return 'ready';

    return 'idle';
  });

  readonly currentWeather = computed(() =>
    this.weather.hasValue() ? this.weather.value() : null
  );

  constructor() {
    const saved = this.loadHistory();
    this.history.set(saved);
    this.city.set(saved[0] ?? 'San José');

    // Effect 1: persistir historial en localStorage
    effect(() => {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(this.history()));
    });

    // Effect 2: agregar ciudad al historial cuando el fetch resuelve OK
    effect(() => {
      if (this.weather.status() !== 'resolved') return;
      const w = this.weather.value();
      if (!w) return;
      untracked(() => this.addCity(w.name));
    });
  }

  search(city: string): void {
    this.city.set(city.trim());
  }

  private loadHistory(): string[] {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  }

  private addCity(city: string): void {
    this.history.update(h => [city, ...h.filter(c => c !== city)].slice(0, 5));
  }
}
