import { Directive, ElementRef, inject, signal } from '@angular/core';

@Directive({
  selector: '[appHover]',
  host: {
    '(click)': 'onMouseClick()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class Hover {
  // protected isHovered = signal(true);
  private el = inject(ElementRef);

  onMouseClick() {
    this.changeColor('yellow');
  }

  onMouseLeave() {
    this.changeColor('');
  }

  changeColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
