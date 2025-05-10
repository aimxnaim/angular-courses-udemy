import { Component, computed, inject, signal } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksServiceToken } from '../../../main';
import { TASK_OPTIONS_LIST, taskStatusOptionsProvider } from '../task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [
    TaskItemComponent,
    CommonModule
  ],
  providers: [
    taskStatusOptionsProvider
  ]
})
export class TasksListComponent {
  private tasksService = inject(TasksServiceToken); 
  taskStatusOptions = inject(TASK_OPTIONS_LIST); 
  selectedFilter = signal<string>('all');
  tasks = computed(() => {
    switch (this.selectedFilter()) {
      case 'open':
        return this.tasksService
        .allTasks()
        .filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tasksService
        .allTasks()
        .filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return this.tasksService
        .allTasks()
        .filter((task) => task.status === 'DONE');
      default:
        return this.tasksService.allTasks();
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
