import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { BsDatepickerModule, DatepickerModule } from 'ngx-bootstrap/datepicker';
//import { BsDatepickerModule } from 'ngx-bootstrap';
import { TransactionsComponent } from './transactions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
   // BsDatepickerModule.forRoot(),
    //DatepickerModule.forRoot() 
  ],
  declarations: [TransactionsComponent],
  //bootstrap:    [ TransactionsComponent ],
  exports: [TransactionsComponent]
})
export class TransactionsModule { }
