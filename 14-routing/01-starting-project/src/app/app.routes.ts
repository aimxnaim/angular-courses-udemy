import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";
import { TaskComponent } from "./tasks/task/task.component";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent, resolveTitle, resolveUserName } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { routes as userRoutes } from "./users/users.routes";
import { inject } from "@angular/core";

const dummyCanMatch: CanMatchFn = (route, segment) => {
    // ? This is a dummy function to show how to use canMatch
    // ? This will be used to check if the route can be activated or not
    // ? This will be used to check if the user is logged in or not
    // ? This will be used to check if the user has permission to access the route or not
    const router = inject(Router);
    const shouldgetAccess = Math.random()
    if(shouldgetAccess > 0.5) {
        return true;
    }
    return new RedirectCommand(router.parseUrl('/unauthorized'));
}

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
        title: resolveTitle, // ? This is a resolver function, it will be called before the route is activated,
        // canMatch: [dummyCanMatch] // ? This is a canMatch function, it will be called before the route is activated
    },
    {
        path: '**',
        component: NotFoundComponent
    }
]