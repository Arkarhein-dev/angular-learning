import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-custom-list-component',
  imports: [],
  templateUrl: './custom-list-component.html',
  styleUrl: './custom-list-component.css',
})
export class CustomListComponent {
  customLists = signal<'Apple' | 'Orange' | 'Pineapple'>('Apple');

  updateCustomLists = this.customLists.update(() => 'Orange');
}
