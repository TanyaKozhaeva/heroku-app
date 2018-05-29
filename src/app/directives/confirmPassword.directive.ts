import { Directive, forwardRef, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors, FormGroup } from '@angular/forms';

@Directive({
  selector: '[validateEqual][ngModelGroup]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ConfirmPasswordDirective),
      multi: true
    }
  ]
})
export class ConfirmPasswordDirective implements Validator {
  @Input('password') public password: string;
  @Input('confirmation') public confirmation;

  public validate(fg: FormGroup): ValidationErrors{
    const fieldOne = fg.value[this.password];
    const fieldTwo = fg.value[this.confirmation];
    const message = {
     'validateEqual': {
       'message': 'Passwords are not the same'
      }
    }

    if (fieldTwo !== '' && fieldOne !== fieldTwo ) {
      return message;
    }
    return null;
  }
}