import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmWindowComponent } from './confirm-window.component';
import { ConfirmService } from '../services/confirm.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [ConfirmWindowComponent],
  exports: [
    ConfirmWindowComponent
  ],
  providers: [
    ConfirmService
  ]
})
export class ConfirmWindowModule { }
