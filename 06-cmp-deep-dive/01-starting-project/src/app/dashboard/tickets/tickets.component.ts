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
  styleUrls: ['./tickets.component.css'], // <-- fixed
  encapsulation: ViewEncapsulation.ShadowDom,
  host: {
    id: 'tickets'
  }
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

  trackById(index: number, item: Ticket): number {
    return Number(item.id); // or item.id, but this is more performant
  }

  onCloseTicket(ticketId: string) {
    // const ticketIndex = this.tickets.findIndex(ticket => ticket.id === ticketId);
    // if (ticketIndex !== -1) {
    //   this.tickets[ticketIndex].status = 'closed';
    // }

    this.tickets = this.tickets.map((ticket: any) => {
      if (ticket.id === ticketId) {
        return {
          ...ticket,
          status: 'closed'
        };
      } 
      return ticket;
    })
  }
}
