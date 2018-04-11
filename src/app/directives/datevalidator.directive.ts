import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: '[dateValidator][ngModelGroup]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateValidatorDirective),
      multi: true
    }
  ]
})
export class DateValidatorDirective implements Validator {
  @Input('from') public from: string;
  @Input('to') public to;

  public validate(fg: FormGroup): ValidationErrors{
    const dateFrom = fg.value[this.from];
    const dateTo = fg.value[this.to];
    const message = {
     'dateValidator': {
       'message': 'Please select the correct period'
      }
    }

    if ((dateFrom && dateTo) && (dateFrom > dateTo) ) {
      return message;
    }
    return null;
  }
}