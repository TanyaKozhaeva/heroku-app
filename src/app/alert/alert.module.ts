import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';

import { AlertComponent } from './alert.component';
import { AlertService } from './alert.service';

@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [
    AlertComponent
  ],
  exports: [
    AlertComponent
  ],
  providers: [
    AlertService
  ]
})
export class AlertModule { }
