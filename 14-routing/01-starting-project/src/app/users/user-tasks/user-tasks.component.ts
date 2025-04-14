import { Component, computed, Input, input, OnChanges, SimpleChanges } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnChanges {
  @Input() userId!: string;
  userName!: string;

  constructor(
    private userService: UsersService,
  ) {}

  // userName = computed(() => {
  //   return this.userService.users.find((user) => user.id === this.userId())?.name;
  // })

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['userId']) {
      const user = this.userService.users.find((user) => user.id === this.userId)?.name;
      this.userName = user ? user : 'Unknown User';
    }
  }
}
