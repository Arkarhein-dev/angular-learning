import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { Button } from '../../../shared/button/button';
import { Control } from '../../../shared/control/control';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [Button, Control, FormsModule],
  selector: 'app-new-ticket',
  styleUrl: './new-ticket.css',
  templateUrl: './new-ticket.html',
})
export class NewTicket {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit(title: string, text: string) {
    console.log('On submitted');
    console.log('Title: ' + title);
    ``;
    console.log('Text: ' + text);
    this.form()?.nativeElement.reset();
  }
}
