import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-user',
  standalone: true,
  imports: [],
  templateUrl: './task-user.component.html',
  styleUrl: './task-user.component.css'
})
export class TaskUserComponent {
  id = input.required<string | undefined>()
}
