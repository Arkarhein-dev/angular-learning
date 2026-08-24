import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]',
  standalone: true,
})
export class Delay {
  private templateRef = inject(TemplateRef);
  private viewContainer = inject(ViewContainerRef);

  @Input({ required: true }) set appDelay(delayMs: number) {
    this.viewContainer.clear();

    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }, delayMs);
  }
}
