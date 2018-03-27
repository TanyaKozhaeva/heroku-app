import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidator } from './emailvalidator.directive';
import { NamevalidatorDirective } from './namevalidator.directive';
import { PhonevalidatorDirective } from './phonevalidator.directive';
import { PasswordValidationDirective } from './password-validation.directive';
import { CardvalidatorDirective } from './cardvalidator.directive';
import { ErrorsComponent } from '../errors/errors.component';
import { ExpiredvalidatorDirective } from './expiredvalidator.directive';

//import { TextMaskModule } from 'angular2-text-mask';

//import { UniquePhoneDirective } from './unique-phone.directive';

@NgModule({
  imports: [
    CommonModule
    //TextMaskModule
  ],
  declarations: [
    EmailValidator,
    NamevalidatorDirective,
    PhonevalidatorDirective,
    PasswordValidationDirective,
    CardvalidatorDirective,
    ErrorsComponent,
    ExpiredvalidatorDirective
    //UniquePhoneDirective
  ],
  exports: [
    PhonevalidatorDirective,
    PasswordValidationDirective,
    CardvalidatorDirective,
    ExpiredvalidatorDirective,
    ErrorsComponent
  ]
})
export class DirectivesModule { }
