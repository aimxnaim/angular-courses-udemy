import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  @Input() userId!: string;

  constructor(
    private tasksService: TasksService,
  ) {}
  
  get userTasks() {
    return this.tasksService.allTasks().filter((task) => task.userId === this.userId);
  }
  
}
