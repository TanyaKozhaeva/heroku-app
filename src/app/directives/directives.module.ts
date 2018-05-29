import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonevalidatorDirective } from './phonevalidator.directive';
import { PasswordValidationDirective } from './password-validation.directive';
import { ConfirmPasswordDirective } from './confirmPassword.directive';
import { CardvalidatorDirective } from './cardvalidator.directive';
import { ErrorsComponent } from '../errors/errors.component';
import { ExpiredvalidatorDirective } from './expiredvalidator.directive';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PhonevalidatorDirective,
    PasswordValidationDirective,
    ConfirmPasswordDirective,
    CardvalidatorDirective,
    ErrorsComponent,
    ExpiredvalidatorDirective
  ],
  exports: [
    PhonevalidatorDirective,
    PasswordValidationDirective,
    ConfirmPasswordDirective,
    CardvalidatorDirective,
    ExpiredvalidatorDirective,
    ErrorsComponent
  ]
})
export class DirectivesModule { }
