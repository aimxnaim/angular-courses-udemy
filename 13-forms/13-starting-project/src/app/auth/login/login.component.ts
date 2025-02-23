import { Component, DestroyRef, ViewChild, afterNextRender, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('form') form!: NgForm;
  private destroyRef = inject(DestroyRef);
  private subscription!: Subscription;

  // ? Below is the oldest way to subscribe to form changes
  // constructor() {
  //   afterNextRender(() => {
  //     this.form().valueChanges?.subscribe(({
  //       next: (value) => console.log('Form Value:', value),
  //     }))
  //   })
  // }

  ngAfterViewInit() {

    const savedForm = window.localStorage.getItem('formValue');

    if (savedForm) {
      const loadedForm = JSON.parse(savedForm);
      const savedEmail = loadedForm.email;
      setTimeout(() => {
        this.form.setValue({
          email: savedEmail,
          password: ''
        });
      }, 100)
    }
    // ? After view initialization, subscribe to form changes
    if (this.form.valueChanges) {
      this.subscription = this.form.valueChanges?.pipe(debounceTime(500)).subscribe((value) => {
        console.log('Form Value:', value);
        window.localStorage.setItem('formValue', JSON.stringify({ email: value.email }))
      });
    }

    // ? Below is to unsubscribe from the subscription
    this.destroyRef.onDestroy(() => this.subscription?.unsubscribe())


  }
  onSubmit(formData: NgForm) {

    if (formData.invalid) {
      return;
    }
    const email = formData.form.value.email;
    const password = formData.form.value.password;

    // console.log('Email:', email);
    // console.log('Password:', password);
    // console.log('FormData:', formData);
  }
}
