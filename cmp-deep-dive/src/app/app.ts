import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { ServerStatus } from './dashboard/server-status/server-status';

import { Traffic } from './dashboard/traffic/traffic';
import { DashboardItem } from './dashboard/dashboard-item/dashboard-item';
import { Ticktes } from './dashboard/tickets/ticktes';

@Component({
  selector: 'app-root',
  imports: [Header, ServerStatus, Ticktes, Traffic, DashboardItem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('cmp-deep-dive');
}
