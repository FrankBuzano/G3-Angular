import { Component, input, output } from '@angular/core';
import { HistoryItem } from '../history-item/history-item';

@Component({
  selector: 'app-history-list',
  imports: [HistoryItem],
  templateUrl: './history-list.html',
  styleUrl: './history-list.css',
})
export class HistoryList {
  readonly cities = input.required<string[]>();
  readonly select = output<string>();
}
