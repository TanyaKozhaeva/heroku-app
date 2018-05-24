import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
//import { BsDatepickerModule } from 'ngx-bootstrap';
import { TransactionsComponent } from './transactions.component';
import {MatDatepickerModule,  MatNativeDateModule, MatDatepickerToggle} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
   // BsDatepickerModule.forRoot(),
    //DatepickerModule.forRoot() 
  ],
  declarations: [TransactionsComponent],
  //bootstrap:    [ TransactionsComponent ],
  exports: [TransactionsComponent]
})
export class TransactionsModule { }
