import { Injectable, inject, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = signal<Task[]>([]);
  private loggingService= inject(LoggingService)

  allTasks = this.tasks.asReadonly();

  constructor() { }

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    };
    this.tasks.update(oldTask => [...oldTask, newTask] );
    this.loggingService.log(`Task added: ${taskData.title}`);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks: any) => 
      oldTasks.map((task: any) => 
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    this.loggingService.log(`Task ${taskId} status updated to ${newStatus}`);
  }
}
