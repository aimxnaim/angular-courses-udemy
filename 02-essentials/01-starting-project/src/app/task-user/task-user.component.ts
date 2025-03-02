import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { dummyTasks } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-task-user',
  standalone: true,
  imports: [
    TaskComponent,
    CommonModule,
    NewTaskComponent
  ],
  templateUrl: './task-user.component.html',
  styleUrl: './task-user.component.css'
})
export class TaskUserComponent {
  id = input.required<string>()
  name = input.required<string>()
  @Input() avatar : string | undefined
  tasks = dummyTasks
  isAddingTasks: boolean = false;

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

  onAddTasks(){
    this.isAddingTasks = true;
  }

  onCancellation(cancel: boolean){
    this.isAddingTasks = cancel;;
  }

  onAddNewTasks(newTask: any){
    this.tasks.push({
      id: Math.random().toString(),
      userId: this.id()!,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate
    });
    this.isAddingTasks = false;
  }
  
}