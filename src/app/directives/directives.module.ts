import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailValidator } from './emailvalidator.directive';
import { NamevalidatorDirective } from './namevalidator.directive';
import { PhonevalidatorDirective } from './phonevalidator.directive';
import { PasswordValidationDirective } from './password-validation.directive';
//import { UniquePhoneDirective } from './unique-phone.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    EmailValidator,
    NamevalidatorDirective,
    PhonevalidatorDirective,
    PasswordValidationDirective
    //UniquePhoneDirective
  ],
  exports: [
    PhonevalidatorDirective,
    PasswordValidationDirective 
  ]
})
export class DirectivesModule { }
