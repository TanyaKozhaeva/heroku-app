import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';

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
    private accountsService: AccountsService
  ) { }

  ngOnInit() {
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
    });
  }

}
