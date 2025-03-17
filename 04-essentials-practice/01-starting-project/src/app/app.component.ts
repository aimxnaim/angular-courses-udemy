import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { UserInput } from './user-input/user-input.interface';
import { UserInputService } from './user-input/user-input.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserInputComponent
],
  templateUrl: './app.component.html',
})

export class AppComponent {
  
  constructor(
    protected userInputService: UserInputService
  ) { }
  
  onCalculate(data: UserInput) {
    const annualData = this.userInputService.calculateInvestmentResults(data);
    console.log(annualData);
  }
}
