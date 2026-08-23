import { Component, Input } from '@angular/core';
import { TicketModel } from '../ticket-model';

@Component({
  imports: [],
  selector: 'app-ticket',
  styleUrl: './ticket.css',
  templateUrl: './ticket.html',
})
export class Ticket {
  // @Input({ required: true }) tickets!: TicketModel[];
}
