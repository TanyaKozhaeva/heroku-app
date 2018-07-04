import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[expiredValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ExpiredvalidatorDirective, multi: true}]
})
export class ExpiredvalidatorDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
    const isValidCardExpired = /^(?:0?[1-9]|1[0-2]) *\/ *(1[8-9]|[2-9][0-9])$/.test(c.value);
    const message = {
      'expiredValidator': {
        'message': 'Expiration date must be valid'
      }
    };
    return isValidCardExpired ? null : message;
  }
}
