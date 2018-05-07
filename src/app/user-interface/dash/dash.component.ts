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
products;
currentUser;
userId;

  constructor(
    private accountsService: AccountsService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
 this.userId = this.currentUser.userInfo.userId
   console.log(this.userId)
  }

  private getProducts(){
    this.accountsService.getProducts()
    .subscribe(res => {
      this.products = res;
    })
  }

}
