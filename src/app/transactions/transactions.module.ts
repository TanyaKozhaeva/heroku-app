import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransactionsComponent } from './transactions.component';
import {MatDatepickerModule,  MatNativeDateModule } from '@angular/material';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [TransactionsComponent],
  exports: [TransactionsComponent]
})
export class TransactionsModule { }
