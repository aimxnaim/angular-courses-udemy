import { Component, ViewEncapsulation } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DashboardItemComponent, NewTicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketInfo: { title: string, text: string }) {
    const newTicket: Ticket = {
      id: Math.random().toString(36).substring(2, 9),
      title: ticketInfo.title,
      request: ticketInfo.text,
      status: 'open',
      date: new Date()
    };
    this.tickets.push(newTicket);
    console.log('New ticket added:', this.tickets);
  }
}
