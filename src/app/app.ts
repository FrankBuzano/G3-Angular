import { Component, inject } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { SearchBar } from './components/search-bar/search-bar';
import { WeatherCard } from './components/weather-card/weather-card';
import { StateMessage } from './components/state-message/state-message';
import { HistoryList } from './components/history-list/history-list';

@Component({
  selector: 'app-root',
  imports: [SearchBar, WeatherCard, StateMessage, HistoryList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly weatherService = inject(WeatherService);

  protected search(city: string): void {
    this.weatherService.search(city);
  }
}
