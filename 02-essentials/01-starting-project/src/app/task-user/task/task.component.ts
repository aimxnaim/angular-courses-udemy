import { Component, EventEmitter, input, Output, output } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<any>()
  @Output() complete = new EventEmitter<string>()

  onSelectedTask() {
    this.complete.emit(this.task().id)
  }

}
