import { Routes } from "@angular/router";
import { TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent, canLeaveNewTaskPage } from "../tasks/new-task/new-task.component";

export const routes : Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
    },
    {
        path: 'tasks', 
        component: TasksComponent    
    },
    {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveNewTaskPage] // ? This is a canDeactivate function, it will be called before the route is deactivated
    }
]