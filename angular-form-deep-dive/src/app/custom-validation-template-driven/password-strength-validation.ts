import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordStrengthValidation]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthValidation,
      multi: true,
    },
  ],
})
export class PasswordStrengthValidation implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    const hasUppercase = /[A-Z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);

    const valid = hasUppercase && hasNumber;

    return valid ? null : { passwordStrengthValidation: true };
  }
}
