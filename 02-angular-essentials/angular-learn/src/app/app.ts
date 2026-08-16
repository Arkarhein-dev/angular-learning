import { Component } from '@angular/core';
import { Home } from './home/home';
import { LoginForm } from './login-form/login-form';

@Component({
  selector: 'app-root',
  imports: [Home, LoginForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
