import { Component, computed, signal } from '@angular/core';
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
  selectedUser : any = signal(DUMMY_USERS[this.randomIndex]);

  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  // ? This is the same as the above code, but below is act like a property
  // get imagePath(){
  //   return `assets/users/${this.selectedUser().avatar}`;
  // }

  onSelectedUser(){
    this.randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[this.randomIndex]);
  }

}
