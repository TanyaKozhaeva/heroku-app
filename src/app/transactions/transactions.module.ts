import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionsComponent } from './transactions.component';
import {MatDatepickerModule,  MatNativeDateModule, DateAdapter } from '@angular/material';
import { SpinnerModule } from '../spinner/spinner.module';
import { CustomDateAdapter } from './customDateAdapter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [TransactionsComponent],
  providers: [
    {provide: DateAdapter, useClass: CustomDateAdapter}
  ],
  exports: [TransactionsComponent]
})
export class TransactionsModule { }
