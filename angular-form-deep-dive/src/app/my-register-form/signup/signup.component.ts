import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

function equalValues(controlName1: string, controlName2: string) {
  return (control: AbstractControl) => {
    const value1 = control.get(controlName1)?.value;
    const value2 = control.get(controlName2)?.value;

    if (value1 === value2) {
      return null;
    }

    return { valuesNotEqual: true };
  };
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    passwords: new FormGroup(
      {
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', Validators.required),
      },
      { validators: [equalValues('password', 'confirmPassword')] },
    ),
    username: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
    }),
    address: new FormGroup({
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
    }),
    role: new FormControl<'student' | 'teacher' | 'employee' | 'founder' | 'other'>('student', [
      Validators.required,
    ]),
    source: new FormArray([new FormControl(false), new FormControl(false), new FormControl(false)]),
    agree: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit() {
    if (this.form.invalid) {
      console.log('Invalid Form');
      this.form.markAllAsTouched;
      return;
    }
    console.log(this.form.value);
  }
}
