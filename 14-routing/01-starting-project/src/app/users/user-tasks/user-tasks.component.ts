import { Component, computed, DestroyRef, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  // @Input() userId!: string;
  userId!: string;
  userName!: string;
  @Input() breadcrumb!: string;

  constructor(
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
    private destroyRef: DestroyRef,
  ) {}

  // userName = computed(() => {
  //   return this.userService.users.find((user) => user.id === this.userId())?.name;
  // })

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['userId']) {
  //     const user = this.userService.users.find((user) => user.id === this.userId)?.name;
  //     this.userName = user ? user : 'Unknown User';
  //   }
  // }

  ngOnInit(): void {
    console.log('breadcrumb', this.breadcrumb);
    const subscribe = this.activatedRoute.paramMap.subscribe({
      next: (params) => {
        this.userId = params.get('userId')!;
        const user = this.userService.users.find((user) => user.id === this.userId)?.name;
        this.userName = user ? user : 'Unknown User';
      },
      error: (error) => {
        console.error('Error retrieving user ID:', error);
      },
    })

    // ? Cleanup subscription when the component is destroyed
    this.destroyRef.onDestroy(() => {
      subscribe.unsubscribe();
    });
  }

}
