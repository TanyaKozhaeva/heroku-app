import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[amountValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: AmountvalidatorDirective, multi: true}]
})
export class AmountvalidatorDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
    //const isValidCardNumber = /^\d{4,4}-\d{4,4}-\d{4,4}-\d{4,4}$/.test(c.value);
    const amount = c.value
    const message = {
      'amountValidator': {
        'message': 'Amount must be valid'
      }
    };
    console.log(amount)
    console.log(message)
    return (amount >= 0) ? null : message;
  }
}
