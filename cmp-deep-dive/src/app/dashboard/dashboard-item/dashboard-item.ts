import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dashboard-item',
  styleUrl: './dashboard-item.css',
  templateUrl: './dashboard-item.html',
})
export class DashboardItem {
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) title!: string;
}
