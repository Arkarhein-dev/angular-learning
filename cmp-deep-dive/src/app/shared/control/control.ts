import { Component, HostListener, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-control',
  styleUrl: './control.css',
  templateUrl: './control.html',
  host: {
    '(click)': 'onClick()',
  },
})
export class Control {
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }
  label = input.required<string>();
  onClick() {
    console.log('clicked');
  }
}
