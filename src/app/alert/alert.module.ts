import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AlertComponent } from './alert.component';
// import { AlertService } from './alert.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AlertComponent
    // AlertService
  ],
  exports: [
    AlertComponent
    // AlertService
  ]
})
export class AlertModule { }
