import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { dummyTasks } from './dummy-tasks';

@Component({
  selector: 'app-task-user',
  standalone: true,
  imports: [
    TaskComponent,
    CommonModule
  ],
  templateUrl: './task-user.component.html',
  styleUrl: './task-user.component.css'
})
export class TaskUserComponent {
  id = input.required<string | undefined>()
  name = input.required<string | undefined>()
  @Input() avatar : string | undefined
  tasks = dummyTasks

  get selectedTasks() {
    let tasks = this.tasks.filter((task) => task.userId === this.id());
    return tasks;
  }

  trackByFn(index: number, task: any): string {
    return task.id; // ? Assuming each task has a unique 'id'
  }

  onSelectedTask(taskId: any) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  } 

  
}