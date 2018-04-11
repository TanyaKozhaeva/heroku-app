import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidator } from './emailvalidator.directive';
import { NamevalidatorDirective } from './namevalidator.directive';
import { PhonevalidatorDirective } from './phonevalidator.directive';
import { PasswordValidationDirective } from './password-validation.directive';
import { ConfirmPasswordDirective } from './unique-phone.directive';//
import { CardvalidatorDirective } from './cardvalidator.directive';
import { ErrorsComponent } from '../errors/errors.component';
import { ExpiredvalidatorDirective } from './expiredvalidator.directive';
import { DateValidatorDirective } from './datevalidator.directive';

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
    ConfirmPasswordDirective,
    CardvalidatorDirective,
    ErrorsComponent,
    ExpiredvalidatorDirective,
    DateValidatorDirective
    //UniquePhoneDirective
  ],
  exports: [
    PhonevalidatorDirective,
    PasswordValidationDirective,
    ConfirmPasswordDirective,
    CardvalidatorDirective,
    ExpiredvalidatorDirective,
    DateValidatorDirective,
    ErrorsComponent
  ]
})
export class DirectivesModule { }
