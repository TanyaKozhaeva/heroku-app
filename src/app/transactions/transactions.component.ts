import { Component, OnInit, DoCheck, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CardsService } from '../services/cards.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit, DoCheck {
  @Input() accountId;
  transactions;
  dateFrom = new FormControl(new Date());
  minDate;
  // accountId = this.account.id;
  dateTo = new FormControl(new Date());
  //serializedDate = new FormControl((new Date()).toISOString());
  serializedDate = new FormControl((new Date()).toString());
 /*  addEvent ( event: MatDatepickerInputEvent < Date >) {
     this.date = event.value
  }*/
  constructor(
    private cardsService: CardsService
  ) {

   // this.bsRangeValue = [this.bsDateFrom, this.bsDateTo];
  }

  // myDateValue: Date;

  ngOnInit() {
    // this.myDateValue = new Date();
    console.log(this.accountId)
  }


  ngDoCheck(){
    console.log(this.dateFrom.value)
    this.minDate = this.dateFrom.value;
    console.log(this.minDate)
  }




  transactionsFilter(){
    let data = {
      //from: this.dateFrom
      // to: dateTo.value

    }
    console.log(data)
    this.cardsService.transactionsFilter(data, this.accountId)
    .subscribe (res =>{
      this.transactions = res;
    })
  }

  filter(){
    console.log(this.dateTo.value)
    console.log(this.dateFrom.value)
  }

}
