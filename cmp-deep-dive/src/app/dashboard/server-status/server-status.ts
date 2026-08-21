import { Component, DestroyRef, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-server-status',
  styleUrl: './server-status.css',
  templateUrl: './server-status.html',
})
export class ServerStatus implements OnInit {
  serverStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);
  // interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit(): void {
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.serverStatus.set('online');
      } else if (rnd < 0.9) {
        this.serverStatus.set('offline');
      } else {
        this.serverStatus.set('unknown');
      }
      console.log('server status :' + this.serverStatus);
    }, 3000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

}
