import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputService } from './user-input.service';

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
  initialInvestment : number = 0;
  annualInvestment : number = 0;
  expectedReturn : number = 0;
  duration : number = 0;

  constructor(
    protected userInputService: UserInputService
  ) { }

  onSubmit() {
    let annualData = this.userInputService.calculateInvestmentResults(this.initialInvestment, this.annualInvestment, this.expectedReturn, this.duration);
    console.log(annualData);
  }
}
