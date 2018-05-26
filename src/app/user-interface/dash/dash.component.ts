import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.sass'],
  providers: [AccountsService
  ]
})
export class DashComponent implements OnInit {
products: any[] = [];
accounts: any[] = [];
currentUser;
userId;


  constructor(
    private loaderService: LoaderService,
    private accountsService: AccountsService
  ) { }

  ngOnInit() {
    this.loaderService.executeAction(true);
    this.getProducts();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
 this.userId = 2; // !!!!!!!!!!!!!!!!!!!!!!
 //this.userId = this.currentUser.id;
this.getAccounts();

  }

  private getProducts() {
    this.accountsService.getProducts()
    .subscribe(res => {
      this.products = res;
    });
  }
  private getAccounts() {
    this.accountsService.getAccounts(this.userId)
    .subscribe(res => {
      this.accounts = res;
      this.loaderService.executeAction(false);
    });
  }

}
