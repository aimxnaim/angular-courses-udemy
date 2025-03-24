import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from "../../shared/button/button.component";
import { ControlComponent } from "../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    id: 'new-ticket'
  }
})
export class NewTicketComponent {
  title!: string;
  request!: string;

  onSubmit(titleInput: HTMLInputElement) {
    console.dir(titleInput.value)
  }
}
