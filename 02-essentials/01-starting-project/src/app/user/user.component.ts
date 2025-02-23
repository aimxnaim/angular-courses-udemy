import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
// import { DUMMY_USERS } from '../dummy-users';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  randomIndex : number = Math.floor(Math.random() * DUMMY_USERS.length)
  selectedUser : any = DUMMY_USERS[this.randomIndex];

  get imagePath(){
    return `assets/users/${this.selectedUser.avatar}`;
  }

  onSelectedUser(){
    this.randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[this.randomIndex];
  }

}
