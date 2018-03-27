import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[passwordValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidationDirective, multi: true}]
})
export class PasswordValidationDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
    const hasNumber = /[0-9]/.test(c.value);
    //const hasCapitalLetter = /[A-Z]/.test(c.value);
    const hasLowercaseLetter = /[a-z]/.test(c.value);
    //const passwordValid = hasNumber && hasCapitalLetter && hasLowercaseLetter;
    const passwordValid = hasNumber && hasLowercaseLetter;
 
    const message = {
      'passwordValidation': {
        'message': 'The password must contain....'
      }
    };
    return passwordValid ? null : message;
  }
}


