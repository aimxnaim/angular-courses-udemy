import { Component, ViewEncapsulation } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { CommonModule } from '@angular/common';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [DashboardItemComponent, NewTicketComponent, CommonModule, TicketComponent],
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
      text: ticketInfo.text,
      status: 'open',
      date: new Date()
    };
    this.tickets.push(newTicket);
    console.log('New ticket added:', this.tickets);
  }

  trackById(){
    return (index: number, ticket: Ticket) => ticket.id;
  }
}
