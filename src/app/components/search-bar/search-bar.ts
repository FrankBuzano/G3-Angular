import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  readonly disabled = input(false);
  readonly search = output<string>();

  protected readonly inputValue = signal('');

  protected onInput(event: Event): void {
    this.inputValue.set((event.target as HTMLInputElement).value);
  }

  protected onSearch(): void {
    const value = this.inputValue().trim();
    if (!value) return;
    this.search.emit(value);
    this.inputValue.set('');
  }
}
