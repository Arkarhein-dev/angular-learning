import { Component, ElementRef, EventEmitter, Output, viewChild, ViewChild } from '@angular/core';
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
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  enteredTitle = '';
  enteredRequest = '';
  @Output() private add = new EventEmitter<{ title: string; request: string }>();

  onSubmit() {
    console.log('On submitted');
    this.add.emit({ title: this.enteredTitle, request: this.enteredRequest });
    this.enteredTitle = '';
    this.enteredRequest = '';
  }
}
