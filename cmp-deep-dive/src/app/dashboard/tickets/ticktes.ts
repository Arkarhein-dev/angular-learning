import { Component } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import { TicketModel } from './ticket-model';
import { Ticket } from "./ticket/ticket";

@Component({
  imports: [NewTicket, Ticket],
  selector: 'app-ticktes',
  styleUrl: './ticktes.css',
  templateUrl: './ticktes.html',
})
export class Ticktes {
  tickets: TicketModel[] = [];

  onAddTicket(ticketData: { title: string; request: string }) {
    const ticket: TicketModel = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.request,
      status: 'open',
    };
    this.tickets.push(ticket);
  }
}
