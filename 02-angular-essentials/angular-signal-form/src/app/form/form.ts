import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';

const signalArray = ['Myanmar', 'Thailand', 'Cambodia', 'Laos', 'Vietnam', 'Malaysia', 'Singapore', 'Indonesia'];


interface LoginData {
  email: string;
  password: string;
  agreeToTerm: boolean;
  radio: string;
  signalValue: string;
  signalArray: string[];
}



@Component({
  selector: 'app-form',
  imports: [FormField],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
    agreeToTerm: true,
    radio: '',
    signalValue: '',
    signalArray:signalArray
  });

  loginForm = form(this.loginModel,(schemaPath) =>{
    required(schemaPath.email, {message: 'Email is required'});
    email(schemaPath.email, {message: 'Please enter a valid email address.'});
    required(schemaPath.password, {message: 'Password is required'});
  });

  onsubmit(event: Event) {
    event.preventDefault();
    const credentials = this.loginModel();

    console.log('Logged in with : ' + credentials);
  }
}
