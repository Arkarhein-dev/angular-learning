import { Component, signal } from '@angular/core';
import { RoutingTest } from './routing-test/routing-test';

@Component({
  selector: 'app-root',
  imports: [RoutingTest],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular-signal-form');
}
