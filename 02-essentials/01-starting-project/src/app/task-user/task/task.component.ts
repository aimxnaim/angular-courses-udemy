import { Component, EventEmitter, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
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
