import { Component } from '@angular/core';
import { LoginComponent } from './reactive-form-2/login/login.component';
import { SignupComponent } from './my-register-form/signup/signup.component';
// import { LoginComponent } from './custom-validation-template-driven/login/login.component';

// import { Login } from './custom-validation-template-driven/login/login';
// import { SignupComponent } from './auth/signup/signup.component';
// import { LoginComponent } from './auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [SignupComponent],
})
export class AppComponent {}
