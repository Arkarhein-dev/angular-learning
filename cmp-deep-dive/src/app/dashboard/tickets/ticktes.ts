import { Component } from '@angular/core';
import { NewTicket } from "./new-ticket/new-ticket";

interface Ticket {
  id: string;
  title: string;
  status: 'open' | 'resolved';
}

@Component({
  imports: [NewTicket],
  selector: 'app-ticktes',
  styleUrl: './ticktes.css',
  templateUrl: './ticktes.html',
})
export class Ticktes {
  tickets: Ticket[] = [
    { id: '#1024', title: 'LMS Login timeout issue', status: 'open' },
    { id: '#1023', title: 'Database lagging during backup', status: 'open' },
    { id: '#1022', title: 'SSL Certificate renewed', status: 'resolved' },
  ];
}
