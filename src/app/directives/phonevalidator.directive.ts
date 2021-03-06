import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[telephoneNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: PhonevalidatorDirective, multi: true}]
})
export class PhonevalidatorDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
    const isValidPhoneNumber = /^\+380\d{2,2} \d{3,3}-\d{2,2}-\d{2,2}$/.test(c.value);
    const message = {
      'telephoneNumber': {
        'message': 'The phone number must be valid'
      }
    };
    return isValidPhoneNumber ? null : message;
  }
}

