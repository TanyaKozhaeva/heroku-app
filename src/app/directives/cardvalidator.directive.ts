import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[cardValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CardvalidatorDirective, multi: true}]
})
export class CardvalidatorDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
    const isValidCardNumber = /^\d{4,4}-\d{4,4}-\d{4,4}-\d{4,4}$/.test(c.value);
    const message = {
      'cardValidator': {
        'message': 'The card number must contain 16 digits'
      }
    };
    return isValidCardNumber ? null : message;
  }
}

