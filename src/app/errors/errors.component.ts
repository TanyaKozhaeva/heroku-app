import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.sass']
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
    'dateValidator': (params) => params.message
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;


  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.invalid && this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ErrorsComponent.errorMessages[type](params);
  }

}
