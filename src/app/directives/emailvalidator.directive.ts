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
  selector: '[emailvalidator]',  
  providers: [  
   {  
    provide: NG_VALIDATORS,  
    useExisting: EmailValidator,  
    multi: true  
   }  
  ]  
 })  
 export class EmailValidator implements Validator {  
  validator: ValidatorFn;  
  constructor() {  
  console.log("!!!!!!!!!!!!!!!!!11")
   this.validator = this.emailValidator();  
  }  
  validate(c: FormControl) {  
   return this.validator(c);  
  }  
  emailValidator(): ValidatorFn {  
    return (c: FormControl) => {  
     let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);  
     if (isValid) {  
      return null;  
     } else {  
      return {  
       emailvalidator: {  
        valid: false  
       }  
      };  
     }  
    }  
   }  


  /* validate(c: FormControl): ValidationErrors {
    const hasNumber =/^\+380\d{9}$/.test(c.value);
    return hasNumber ? null : { invalidPhone: 'The phone number must be valid (XXX-XXX-XXX, where X is a digit)' };
    
   }*/
  }