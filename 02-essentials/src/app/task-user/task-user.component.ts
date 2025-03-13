import { Component, Input, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CommonModule } from '@angular/common';
import { dummyTasks } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from "../shared/card/card.component";
import { TaskUserService } from './task-user.service';

@Component({
  selector: 'app-task-user',
  templateUrl: './task-user.component.html',
  styleUrl: './task-user.component.css'
})
export class TaskUserComponent {
  id = input.required<string>()
  name = input.required<string>()
  @Input() avatar : string | undefined
  tasks = dummyTasks
  isAddingTasks: boolean = false;

  constructor(private taskService: TaskUserService) {}

  get selectedTasks() {
    return this.taskService.onSelectedTask(this.id());
  }

  trackByFn(index: number, task: any): string {
    return task.id; // ? Assuming each task has a unique 'id'
  }

  onAddTasks(){
    this.isAddingTasks = true;
  }

  onClose(close: boolean){
    this.isAddingTasks = close;;
  }

  onAddNewTasks(newTask: any){
    this.taskService.addTask(newTask, this.id());
    this.isAddingTasks = false;
  }
  
}