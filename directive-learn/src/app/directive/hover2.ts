import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: '[appHover2]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class Hover2 {
  private el = inject(ElementRef);
  @Input({ required: true }) defaultColor!: string;
  @Input({ required: true }) appHover2!: string;

  onMouseEnter() {
    this.setColor(this.defaultColor || this.appHover2 || 'red');
  }

  onMouseLeave() {
    this.setColor('');
  }

  setColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
