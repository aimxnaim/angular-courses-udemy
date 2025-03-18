import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { investmentData, UserInput } from './user-input/user-input.interface';
import { UserInputService } from './user-input/user-input.service';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
],
  templateUrl: './app.component.html',
})

export class AppComponent {
  annualData = signal<investmentData[] | undefined>(undefined);
  
  constructor(
    protected userInputService: UserInputService
  ) { }
  
  onCalculate(data: UserInput) {
    this.annualData.set(this.userInputService.calculateInvestmentResults(data));
  }
}
