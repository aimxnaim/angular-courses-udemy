import { AfterViewInit, Component, ElementRef, EventEmitter, output, Output, ViewChild, ViewEncapsulation } from '@angular/core';
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
export class NewTicketComponent implements AfterViewInit {
  title!: string;
  request!: string;
  @ViewChild('ticketForm') ticketForm!: ElementRef<HTMLFormElement>;
  // @Output() add = new EventEmitter<{ title: string, key: string}>();
  add = output<{ title: string, text: string}>();

  ngAfterViewInit(): void {
    
  }

  onSubmit(title: string, text: string) {
    this.ticketForm.nativeElement.reset();
    this.add.emit({
      title: title,
      text: text
    })
  }
}
