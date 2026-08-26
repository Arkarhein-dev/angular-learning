import { AbstractControl } from '@angular/forms';

export function validatePasswordStrength(control: AbstractControl) {
  if (!control.value) return null;
  const password = control.value;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isValidPassword = hasUppercase && hasLowercase && hasNumber && hasSymbol;
  return isValidPassword ? null : { passwordStrength: true };
}
