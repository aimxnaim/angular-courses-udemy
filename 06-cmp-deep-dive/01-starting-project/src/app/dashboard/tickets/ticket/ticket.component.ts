import { Component, Input, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input() ticket! : Ticket;
  detailsVisible = signal(false)

  onToggleDetails() {
    // ? will automatically send the old value to the new value
    this.detailsVisible.update((prev) => !prev);
  }

}
