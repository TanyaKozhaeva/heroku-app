/*import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';
import { UserService} from './../services/user.service'

@Directive({
  selector: '[uniquePhoneValidator]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, 
      useExisting: UniquePhoneDirective, multi: true},
    UserService
  ]
})
export class UniquePhoneDirective implements Validator {
  constructor(private userService:UserService) {
  }

  validate(c:FormControl): ValidationErrors{
    const message = {
      'uniquePhoneValidator': {
        'message': 'This phone is already exist'
      }
    };
    return new Promise(resolve =>
      this.userService.getUserPhone(c.value).subscribe(res => {
        if (res == true) {
            resolve(null);
        }
        else {
            //resolve({validateEmailTaken: {valid: false}});
             resolve(message);
             //Возможно нужно поменять местами, так как при наличии неуникального телефонасервер может вернуть фолс, тогда мы возвращаем мэссэдж
        }
    }));
  }
}
*/
