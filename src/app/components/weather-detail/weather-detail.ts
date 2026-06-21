import { Component, input } from '@angular/core';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.html',
  styleUrl: './weather-detail.css',
})
export class WeatherDetail {
  readonly label = input.required<string>();
  readonly value = input.required<string>();
  readonly icon = input.required<string>();
}
