import { Component, OnInit, DoCheck, Input} from '@angular/core';
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
  message;
  transactions:any[] = [];
 currentDate = new Date();
  dateFrom = this.currentDate;
  minDate;
  maxDate;
  dateTo = this.currentDate;


  constructor(
    private accountsService: AccountsService,
    private route: ActivatedRoute) {
    this.accountId = this.route.snapshot.paramMap.get('id');
  }

get isMobile(){
let windWidth = (window.innerWidth);
if(windWidth < 900){
  return true;
} else {
  return false;
}
}
  ngOnInit() {
  }

  ngDoCheck(){
    this.minDate = this.dateFrom;
    this.maxDate = this.dateTo;
  }


  filter() {
    let data = {
      from: this.formatDate(this.dateFrom),
      to: this.formatDate(this.dateTo)
    };
    this.showSpinner = true;
    this.accountsService.transactionsFilter(data, this.accountId)
    .subscribe (res => {
      this.transactions = res;
      if(this.transactions.length === 0){
        this.message = "You have no transactions for this period"
      }
      this.showSpinner = false;
    });
  }

  formatDate(date){
    let dd = date.getDate();
    if(dd<10) { dd = '0' + dd};

    let mm = date.getMonth() + 1;
    if(mm<10) { mm = '0' + mm};

    let yyyy = date.getFullYear();

    return dd + '-' + mm + '-' + yyyy;
  }


}
