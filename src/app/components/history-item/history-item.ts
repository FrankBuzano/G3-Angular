import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.html',
  styleUrl: './history-item.css',
})
export class HistoryItem {
  readonly city = input.required<string>();
  readonly select = output<string>();
}
