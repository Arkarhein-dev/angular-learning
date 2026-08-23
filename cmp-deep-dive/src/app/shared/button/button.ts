import { Component, HostListener } from '@angular/core';

@Component({
  imports: [],
  selector: 'button[appButton]',
  styleUrl: './button.css',
  templateUrl: './button.html',
  // host: {
  //   '(click)': 'onClick()',
  // },
})
export class Button {
  @HostListener('click') onClick() {
    console.log('clicked....');
  }
  // onClick() {
  //   console.log('Clicked the button');
  // }
}
