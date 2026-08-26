import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true,
  host: {
    '[style.backgroundColor]': 'bgColor',
    '[style.border]': 'border',
    '[style.padding]': 'padding',
    '[style.color]': 'color',
    '[class.is-hovered]': 'isHovered',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()',
  },
})
export class HoverHighlight {
  bgColor = '';
  border = '';
  padding = '';
  color = '';
  isHovered = false;

  onMouseEnter() {
    this.bgColor = 'red';
    this.isHovered = true;
    this.border = 'none';
    this.padding = '20px';
    this.color = 'white';
    console.log('mouse enter');
  }

  onMouseLeave() {
    this.bgColor = 'blue';
    this.isHovered = false;
    console.log('mouse leave');
  }

  onClick() {
    this.bgColor = 'yellow';
    this.color = 'white';
    this.padding = '10px';
    this.isHovered = true;
  }
}
