import { Component, input } from '@angular/core';
import { WeatherResponse } from '../../services/weather.service';
import { WeatherDetail } from '../weather-detail/weather-detail';

@Component({
  selector: 'app-weather-card',
  imports: [WeatherDetail],
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.css',
})
export class WeatherCard {
  readonly weather = input.required<WeatherResponse>();
  readonly stale = input(false);
  readonly updating = input(false);
}
