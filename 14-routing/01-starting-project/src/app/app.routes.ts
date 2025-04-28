import { Routes } from "@angular/router";
import { TaskComponent } from "./tasks/task/task.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent, resolveTitle, resolveUserName } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { routes as userRoutes } from "./users/users.routes";

export const routes: Routes = [
    {
        path: '',
        component: NoTaskComponent
    },
    {
        path: 'tasks',
        component: TaskComponent
    },
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        children: userRoutes,
        runGuardsAndResolvers: 'paramsOrQueryParamsChange', // ? This will run the guards and resolvers when the params or query params change
        data : {
            title: 'User Tasks',
            breadcrumb: 'User Tasks' // ? This is static data, can be used for breadcrumb
        },
        resolve: {
            userName: resolveUserName // ? This is a resolver function, it will be called before the route is activated
        },
        title: resolveTitle // ? This is a resolver function, it will be called before the route is activated
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]