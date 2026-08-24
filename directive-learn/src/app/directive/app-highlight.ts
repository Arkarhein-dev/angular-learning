import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class AppHighlight {
  private el = inject(ElementRef);

  @Input('appHighlight') highlightColor = 'yellow';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(bgColor: string) {
    this.el.nativeElement.style.backgroundColor = bgColor;
  }
}
