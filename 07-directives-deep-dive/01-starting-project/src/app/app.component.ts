import { Component, computed, inject } from '@angular/core';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { CommonModule } from '@angular/common';
import { AuthDirective } from './directives/auth.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [AuthComponent, LearningResourcesComponent, CommonModule, AuthDirective],
})
export class AppComponent {
  private auth = inject(AuthService);

  isAdmin = computed(() => this.auth.activePermission() === 'admin');

  // ? This is a getter method
  // ? It is a computed property that returns a boolean value
  // ? indicating whether the user has admin permissions.
  // ? It uses the AuthService to check the active permission.
  // ? The computed property is updated automatically when the active permission changes.
  get isItAdmin(): boolean {
    return this.auth.activePermission() === 'admin';
  }
}
