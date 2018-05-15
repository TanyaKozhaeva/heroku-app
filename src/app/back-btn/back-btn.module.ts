import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackBtnComponent } from './back-btn.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BackBtnComponent],
  exports: [
    BackBtnComponent
  ]
})
export class BackBtnModule { }
