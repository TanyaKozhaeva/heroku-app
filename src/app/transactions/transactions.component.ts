import { Component, OnInit, DoCheck, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import { CardsService } from '../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit, DoCheck{
  @Input() accountId;
  showSpinner = false;
  transactions;
 currentDate = new Date();
 //date = new Date();
 //currentDate = date.toLocaleString("ru")
  dateFrom = this.currentDate;
  minDate;
  maxDate;
  dateTo = this.currentDate;

  constructor(
    private accountsService: AccountsService,
    private route: ActivatedRoute
  ) {
    this.accountId = this.route.snapshot.paramMap.get('id');
  }


  ngOnInit() {
  }



  ngDoCheck(){
    this.minDate = this.dateFrom;
    this.maxDate = this.dateTo;
  }


  filter() {
    const data = {
      from: this.dateFrom,
      to: this.dateTo
    };
    this.showSpinner = true;
    this.accountsService.transactionsFilter(data, this.accountId)
    .subscribe (res => {
      this.transactions = res;
      this.showSpinner = false;
    });
  }


}
