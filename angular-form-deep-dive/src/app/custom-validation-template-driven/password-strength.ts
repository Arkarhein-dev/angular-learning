// import { Directive } from '@angular/core';
// import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

// @Directive({
//   selector: '[appPasswordStrength]',
//   standalone: true,
//   providers: [
//     {
//       provide: NG_VALIDATORS,
//       useExisting: PasswordStrength,
//       multi: true,
//     },
//   ],
// })
// export class PasswordStrength implements Validator {
//   validate(control: AbstractControl): ValidationErrors | null {
//     const value = control.value;
//     if (!value) return null;

//     const hasUppercase = /[A-Z]/.test(value);
//     const hasNumber = /[0-9]/.test(value);
//     const valid = hasUppercase && hasNumber;
//     return valid ? null : { PasswordStrength: true };
//   }
// }
