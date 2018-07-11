import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.sass'],
  animations: [
    trigger('showErrors', [
      state('in', style({transform: 'scaleX(0)'})),
transition('void => *', [
  animate('1s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
    style({transform: 'scaleX(0)', offset: 0}),
    style({transform: 'scaleX(1.1)', offset: 0.7}),
    style({transform: 'scaleX(1)', offset: 1.0})
  ]))
]),
transition('* => void', [
  animate('.3s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
    style({transform: 'scaleX(1)', offset: 0}),
    style({transform: 'scaleX(1.1)', offset: 0.3}),
    style({transform: 'scaleX(0)', offset: 1.0})
  ]))
])
])
  ]
})
export class ErrorsComponent {

  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'email': () => 'The email must be valid',
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    'telephoneNumber': (params) => params.message,
    'passwordValidation': (params) => params.message,
    'validateEqual': (params) => params.message,
    'cardValidator': (params) => params.message,
    'expiredValidator': (params) => params.message,
    'dateValidator': (params) => params.message,
    'amountValidator': (params) => params.message,
    'requiredValidator': (params) => params.message,

  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;
  showErrors;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.invalid && this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field =>
        this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    this.showErrors = true;
    return ErrorsComponent.errorMessages[type](params);
  }
}
