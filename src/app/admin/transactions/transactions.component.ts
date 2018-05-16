import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass'],
  providers: [CardsService, AccountsService]
})
export class TransactionsComponent implements OnInit {
  accountId;
  transactions;
  currentAccount;


  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute,
    private accountsService: AccountsService
  ) { }

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('id');
    this.getAccountDetails();
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
  private getAccountDetails(){
    this.accountsService. getAccountDetails(this.accountId)
    .subscribe(res => {
      this.currentAccount = res;
    });
  }
}
