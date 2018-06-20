import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.sass']
})
export class DashComponent implements OnInit {
products: any[]=[];
accounts: any[]=[];
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
    this.loaderService.executeAction(true);
    this.getProducts();
this.getAccounts();

  }

  private getProducts() {
    this.accountsService.getProducts()
    .subscribe(res => {
      for(var i=0; i<res.length; i++){
        if(res[i].currency=="UAH") {
          continue;
        } else{
          this.products.push(res[i])
        }
      }
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
