import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';
import { LoaderService } from '../../loader/loader.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {
  accountId;
  transactions;
  currentAccount;


  constructor(
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private accountsService: AccountsService
  ) { 
    this.accountId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.loaderService.executeAction(true);
    this.getAccountDetails();
  }

  private getAccountDetails(){
    this.accountsService. getAccountDetails(this.accountId)
    .subscribe(res => {
      this.currentAccount = res;
      this.loaderService.executeAction(false);
    });
  }
}
