import { Component } from '@angular/core';
import { LoginComponent } from './custom-validation-template-driven/login/login.component';
// import { LoginComponent } from './custom-validation-template-driven/login/login.component';

// import { Login } from './custom-validation-template-driven/login/login';
// import { SignupComponent } from './auth/signup/signup.component';
// import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponent],
})
export class AppComponent {}
