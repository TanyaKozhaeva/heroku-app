import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmWindowComponent } from './confirm-window.component';
import { ConfirmService } from '../services/confirm.service';

@NgModule({
  imports: [
    CommonModule,
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
