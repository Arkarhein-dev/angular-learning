import { Service } from '@angular/core';

@Service()
export class AnalyticsLogger {
  trackEvent(category: string, value: string) {
    console.log('analytic event logged..', {
      category,
      value,
      timestamp: new Date().toISOString(),
    });
  }
}
