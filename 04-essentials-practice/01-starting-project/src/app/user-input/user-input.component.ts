import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  intialInvesment : string = '';
  annualInvesment : string = '';
  expectedReturn : string = '';
  duration : string = '';
  onSubmit() {
    console.log('submitted');
    console.log('Initial Investment: ' + this.intialInvesment);
    console.log('Annual Investment: ' + this.annualInvesment);
    console.log('Expected Return: ' + this.expectedReturn);
    console.log('Duration: ' + this.duration);
  }
}
