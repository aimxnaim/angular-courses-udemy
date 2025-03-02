import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input() avatar!: string;
  @Input() name!: string;
  @Output() select = new EventEmitter;
  currentUser = input.required<boolean | undefined>()

  get imagePath(){ 
    return `assets/users/${this.avatar}`;
   }

   onSelectedUser(){
    this.select.emit(this.id);
   }
   
}
