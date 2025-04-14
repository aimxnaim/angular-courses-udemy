import { Component, computed, input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>();

  constructor(
    private userService: UsersService,
  ) {}

  userName = computed(() => {
    return this.userService.users.find((user) => user.id === this.userId())?.name;
  })
}
