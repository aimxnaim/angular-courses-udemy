import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { CommonModule } from '@angular/common';
import { TaskUserComponent } from './task-user/task-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    CommonModule,
    TaskUserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  id!: string ;

  get selectedUser(){
    return this.users.find((user) => user.id === this.id);
  }

  onSelectedUser(id: string) {
    this.id = id;
  }
}
