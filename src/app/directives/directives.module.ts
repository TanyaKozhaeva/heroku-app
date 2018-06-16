import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonevalidatorDirective } from './phonevalidator.directive';
import { PasswordValidationDirective } from './password-validation.directive';
import { ConfirmPasswordDirective } from './confirmPassword.directive';
import { CardvalidatorDirective } from './cardvalidator.directive';
import { ErrorsComponent } from '../errors/errors.component';
import { ExpiredvalidatorDirective } from './expiredvalidator.directive';
import { AmountvalidatorDirective } from './amountvalidator.directive';
import { OutsideClickDirective } from './outsideclick.directive';


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
    ExpiredvalidatorDirective,
    AmountvalidatorDirective,
    OutsideClickDirective
  ],
  exports: [
    PhonevalidatorDirective,
    PasswordValidationDirective,
    ConfirmPasswordDirective,
    CardvalidatorDirective,
    ExpiredvalidatorDirective,
    AmountvalidatorDirective,
    OutsideClickDirective,
    ErrorsComponent
  ]
})
export class DirectivesModule { }
