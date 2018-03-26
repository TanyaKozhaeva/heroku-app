import {  
  ReactiveFormsModule,  
  NG_VALIDATORS,  
  FormsModule,  
  FormGroup,  
  FormControl,  
  ValidatorFn,  
  Validator,  
  ValidationErrors
 } from '@angular/forms';  
import { Directive } from '@angular/core';

@Directive({
  selector: '[appNamevalidator]',
  providers: [  
    {  
     provide: NG_VALIDATORS,  
     useExisting: NamevalidatorDirective ,  
     multi: true  
    }  
   ]  
})
export class NamevalidatorDirective implements Validator{
  validator: ValidatorFn;  
  constructor() {  
  console.log("!!!!!!!!!!!!!!!!!11")
   this.validator = this.nameValidator();  
  }  
  validate(c: FormControl) {  
   return this.validator(c);  
  }  
  nameValidator(): ValidatorFn {  
    return (c: FormControl) => {  
      const hasLetters =/[A-z]/.test(c.value);
      const hasNumber = /[0-9]/.test(c.value);
      //const hasSymbols = /[^!@#$%^&*()_]/.test(value);
      const nameValid = hasLetters && !hasNumber;
      if (nameValid) {  
        return null;  
       } else {  
        return {  
          appNamevalidator: {  
          valid: false  
         }  
        };    
     }  
    }
  }
}  
