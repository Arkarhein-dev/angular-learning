import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight2]',
})
export class Highlight {
  private el = inject(ElementRef);

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
