import { computed, Service, signal } from '@angular/core';

@Service()
export class CounterService {
  private counterSignal = signal<number>(0);
  // read only public signal view
  count = this.counterSignal.asReadonly();

  doubleCount = computed(() => this.counterSignal() * 2);

  increaseCount() {
    this.counterSignal.update((count) => count + 1);
  }

  decreaseCount() {
    this.counterSignal.update((count) => count - 1);
  }

  resetCount() {
    this.counterSignal.set(0);
  }
}
