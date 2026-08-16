import { Component, signal } from '@angular/core';
import { Form } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  imports: [FormField],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  loginDataForm = form(this.loginModel);

  onSubmit(e: Event) {
    e.preventDefault();
    const credentials = this.loginModel();
    console.log(credentials);
  }
}
