import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.sass']
})
export class DashComponent implements OnInit {
products;
accounts;
currentUser;
userId;


  constructor(
    private loaderService: LoaderService,
    private accountsService: AccountsService
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
 this.userId = this.currentUser.userInfo.userId;
  }

  ngOnInit() {
    //this.loaderService.executeAction(true);
    this.getProducts(); 
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
