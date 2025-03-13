import { Component, inject, input} from '@angular/core';
import { TaskUserService } from '../task-user.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  task = input.required<any>()
  private taskService = inject(TaskUserService)

  onSelectedTask() {
    this.taskService.completeTask(this.task().id);
  }

}
