import { Component, computed, DestroyRef, inject, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent {
  // @Input() userId!: string;
  // userId!: string;
  @Input() userName!: string;
  @Input() breadcrumb!: string;

  // constructor(
  //   private userService: UsersService,
  //   private activatedRoute: ActivatedRoute,
  //   private destroyRef: DestroyRef,
  // ) {}

  // userName = computed(() => {
  //   return this.userService.users.find((user) => user.id === this.userId())?.name;
  // })

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['userId']) {
  //     const user = this.userService.users.find((user) => user.id === this.userId)?.name;
  //     this.userName = user ? user : 'Unknown User';
  //   }
  // }

  // ngOnInit(): void {
  //   // ? Using the resolver function to get the user name
  //   // const subscribe = this.activatedRoute.paramMap.subscribe({
  //   //   next: (params) => {
  //   //     this.userId = params.get('userId')!;
  //   //     const user = this.userService.users.find((user) => user.id === this.userId)?.name;
  //   //     this.userName = user ? user : 'Unknown User';
  //   //   },
  //   //   error: (error) => {
  //   //     console.error('Error retrieving user ID:', error);
  //   //   },
  //   // })

  //   // ? using resolver to get the data before the route is activated
  //   const subscribe = this.activatedRoute.data.subscribe({
  //     next: (data) => {
  //       console.log('data', data);
  //     },
  //     error: (error) => {
  //       console.error('Error retrieving user name:', error);
  //     },
  //   })

  //   // ? Cleanup subscription when the component is destroyed
  //   this.destroyRef.onDestroy(() => {
  //     subscribe.unsubscribe();
  //   });
  // }

}

export const resolveUserName: ResolveFn<string> = (activatedRoute : ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  const userService = inject(UsersService);
  const userName = userService.users.find((user) => user.id === activatedRoute.params['userId'])?.name || 'Unknown User';
  return userName;
}

export const resolveTitle: ResolveFn<string> = (activatedRoute : ActivatedRouteSnapshot, routerState: RouterStateSnapshot) => {
  return resolveUserName(activatedRoute, routerState) + ' Tasks';
}
 