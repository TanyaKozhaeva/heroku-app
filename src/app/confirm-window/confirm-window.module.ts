import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmWindowComponent } from './confirm-window.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConfirmWindowComponent],
  exports: [
    ConfirmWindowComponent
  ]
})
export class ConfirmWindowModule { }
