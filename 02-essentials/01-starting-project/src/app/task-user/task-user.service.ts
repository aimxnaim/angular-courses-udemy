import { Injectable } from "@angular/core";
import { dummyTasks } from "./dummy-tasks";
import { type newTaskData } from "./task-user.interface";

@Injectable({
    providedIn: 'root'
})

export class TaskUserService {
  tasks : any[] = [];
  
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || JSON.stringify(dummyTasks));
  }

  onSelectedTask(userId: any) {
    return this.tasks.filter((task: any) => task.userId === userId);
  }

  addTask(newTask: newTaskData, userId: string){
    this.tasks.push({
        id: Math.random().toString(),
        userId: userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate
      });
    this.savedTasks();
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter((task :any) => task.id !== taskId); // ✅ Actually updates the array
    this.savedTasks();
    return this.tasks;
  }  

  savedTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}