import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { validatePasswordStrength } from '../ValidatePasswordStrength';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), validatePasswordStrength],
    }),
  });

  get isValidEmail(): boolean {
    const emailValue = this.form.controls.email;
    return emailValue.touched && emailValue.dirty && emailValue.invalid;
  }

  get isValidPassword() {
    const passwordValue = this.form.controls.password;
    return passwordValue.touched && passwordValue.dirty && passwordValue.invalid;
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('Invalid submit');
      this.form.markAllAsTouched();
      console.log(this.form);
      return;
    }
    console.log(this.form);
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    console.log(enteredEmail, enteredPassword);
  }
}
