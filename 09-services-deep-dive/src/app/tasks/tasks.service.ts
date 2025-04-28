import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  constructor() { }

  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN'
    };
    this.tasks.update(oldTask => [...oldTask, newTask] );
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((oldTasks: any) => 
      oldTasks.map((task: any) => 
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }
}
