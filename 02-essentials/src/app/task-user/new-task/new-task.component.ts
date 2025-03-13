import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from '../task-user.interface';
import { TaskUserService } from '../task-user.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<boolean>();
  title!: string;
  summary = signal('')
  dueDate = signal('')
  private taskService = inject(TaskUserService)

  onCancel() {
    this.close.emit(false);
  }
  
  onSubmit() {
    this.taskService.addTask({
      title: this.title,
      summary: this.summary(),
      dueDate: this.dueDate()
    }, this.userId);

    this.close.emit(false);
  }

}

