import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';

import { ErrorPopUpComponent } from './error-pop-up.component';
import { ErrorPopUpService } from './error-pop-up.service';
@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [ErrorPopUpComponent],
  exports: [ErrorPopUpComponent],
  providers: [ErrorPopUpService]
})
export class ErrorPopUpModule { }
