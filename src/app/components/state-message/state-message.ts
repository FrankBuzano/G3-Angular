import { Component, input } from '@angular/core';
import { ViewState } from '../../services/weather.service';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';

@Component({
  selector: 'app-state-message',
  imports: [LoadingSpinner],
  templateUrl: './state-message.html',
  styleUrl: './state-message.css',
})
export class StateMessage {
  readonly state = input.required<ViewState>();
}
