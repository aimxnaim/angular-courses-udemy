import { Injectable } from "@angular/core";
import { dummyTasks } from "./dummy-tasks";
import { type newTaskData } from "./task-user.interface";

@Injectable({
    providedIn: 'root'
})

export class TaskUserService {
  tasks = dummyTasks;

  onSelectedTask(userId: any) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: newTaskData, userId: string){
    this.tasks.push({
        id: Math.random().toString(),
        userId: userId,
        title: newTask.title,
        summary: newTask.summary,
        dueDate: newTask.dueDate
      });
  }

  completeTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId); // ✅ Actually updates the array
    return this.tasks;
  }  
}