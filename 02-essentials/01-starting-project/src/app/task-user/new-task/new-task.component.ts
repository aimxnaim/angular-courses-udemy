import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from '../task-user.interface';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<boolean>();
  @Output() add = new EventEmitter<newTaskData>();
  title!: string;
  summary = signal('')
  dueDate = signal('')

  onCancel() {
    this.cancel.emit(false);
  }

  onSubmit() {
    this.add.emit({
      title: this.title,
      summary: this.summary(),
      dueDate: this.dueDate()
    });
  }

}

