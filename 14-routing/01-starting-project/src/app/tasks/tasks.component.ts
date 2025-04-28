import { Component, DestroyRef, Input, OnInit } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent implements OnInit {
  @Input() userId!: string;
  @Input() breadcrumb!: string;
  // @Input() sort?: 'asc' | 'desc';
  sort?: 'asc' | 'desc' = 'asc' ;


  constructor(
    private tasksService: TasksService,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
  ) {}
  
  get userTasks() {
    return this.tasksService
              .allTasks()
              .filter((task) => task.userId === this.userId)
              .sort((a, b) => {
                if (this.sort === 'desc') {
                  return a.id > b.id ? -1 : 1;
                } else  {
                  return a.id > b.id ? 1 : -1;
                }
              });
  }

  ngOnInit(): void {
    const subscribe = this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        this.sort = params['sort'];
      }
    })

    this.destroyRef.onDestroy(() => {
      subscribe.unsubscribe();
    })
  }
  
}
