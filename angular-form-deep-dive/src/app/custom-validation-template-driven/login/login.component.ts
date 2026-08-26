import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PasswordStrengthValidation } from '../password-strength-validation';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, PasswordStrengthValidation],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credential = {
    email: '',
    password: '',
  };

  onSubmit(formData: NgForm) {
    if (!formData.form) return;
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;

    console.log(formData.form);
    console.log(enteredEmail, enteredPassword);
    formData.reset();
  }
}
