import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {
  isOpen = false;
  bsDateFrom = new Date();
  bsDateTo = new Date();
  // bsValue = new Date();
  bsRangeValue: Date[];
  datepickerModel: Date;
  daterangepickerModel: Date[];
 // maxDate = new Date();
  constructor() {

    this.bsRangeValue = [this.bsDateFrom, this.bsDateTo];
  }

  myDateValue: Date;

  ngOnInit() {
    this.myDateValue = new Date();
  }

  filter(){
    console.log(this.bsDateFrom)
    console.log(this.bsDateTo)
    console.log(this.bsRangeValue)
  }

}
