import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from './user-input.interface';

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
  initialInvestment = signal<string>('');
  annualInvestment = signal<string>('');
  expectedReturn = signal<string>('');
  duration = signal<string>('');
  calculate = output<UserInput>();

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.initialInvestment(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration()
    })

    this.initialInvestment.set('');
    this.annualInvestment.set('');
    this.expectedReturn.set('');
    this.duration.set('');
  }
}
