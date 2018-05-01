import { Component, OnInit } from '@angular/core';
//import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.sass']
})
export class AccountsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    //this.getAccounts()
  }
  /*
  private getAccounts(){
    this.accountsService.getAccounts(this.userId)
    .subscribe(res => {
      this.accounts = res;
    });
  }
  */

}
