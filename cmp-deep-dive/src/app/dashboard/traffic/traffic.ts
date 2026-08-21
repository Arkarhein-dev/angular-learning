import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-traffic',
  styleUrl: './traffic.css',
  templateUrl: './traffic.html',
})
export class Traffic {
  requestsPerSecond: number = 145;
  bandwidthUsage: string = '45.2 Mbps';
  trafficLoad: 'normal' | 'high' | 'critical' = 'normal';

  ngOnInit(): void {
    // Simulated live updates
    setInterval(() => {
      this.requestsPerSecond = Math.floor(Math.random() * (180 - 120 + 1)) + 120;
    }, 3000);
  }
}
