import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

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
}
