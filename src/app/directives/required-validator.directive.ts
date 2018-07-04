import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[requiredValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: RequiredvalidatorDirective, multi: true}]
})
export class RequiredvalidatorDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
let parent = c["_parent"];
let controlName = null;
Object.keys(parent.controls).forEach((name) =>
{if (c === parent.controls[name]){
   controlName = name;
}
});
    const message = {
      'requiredValidator': {
        'message': 'Field ' + controlName + ' is required'
      }
    };
    return c.pristine ? message : null;
  }
}
