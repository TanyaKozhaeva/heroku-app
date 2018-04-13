import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
// import { AlertService } from './alert.service';

@NgModule({
  imports: [
    CommonModule
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
