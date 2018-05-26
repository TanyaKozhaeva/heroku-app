import { Component, OnInit, DoCheck, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import { CardsService } from '../services/cards.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit, DoCheck{
  @Input() accountId;
  showSpinner = false;
  transactions;
 // currentDate = new FormControl(new Date());
 currentDate = new Date();
  dateFrom = this.currentDate;
  minDate;

  // accountId = this.account.id;
  dateTo = this.currentDate;
  //serializedDate = new FormControl((new Date()).toISOString());
  serializedDate = new FormControl((new Date()).toString());
 /*  addEvent ( event: MatDatepickerInputEvent < Date >) {
     this.date = event.value
  }*/
  /*
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.currenevent.value)
    console.log(Date)
  }*/
  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) {

   // this.bsRangeValue = [this.bsDateFrom, this.bsDateTo];
  }

  // myDateValue: Date;

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('id');
    // this.myDateValue = new Date();
    console.log(this.accountId)
  }



  ngDoCheck(){
    console.log(this.dateFrom)
    this.minDate = this.dateFrom;
    console.log(this.dateTo)
  }




  filter(){
    let data = {
      //from: this.dateFrom
      // to: dateTo.value

    }
    console.log(data)
    this.showSpinner = true;
    this.cardsService.transactionsFilter(data, this.accountId)
    .subscribe (res =>{
      this.transactions = res;
      this.showSpinner = false;
    })
  }


}
