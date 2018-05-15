import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../../../../services/accounts.service';
import { AlertService } from '../../../../alert/alert.service';

@Component({
  selector: '[app-account-item]',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.sass']
})
export class AccountItemComponent implements OnInit {
@Input() account;
@Input() index;
@Output() deletingAccount = new EventEmitter();
showActions;

  constructor(
    private accountsService: AccountsService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

   showingActions(){
    this.showActions ? this.showActions=false : this.showActions=true;
  }

  deleteAccount(){
    //this.users.splice(i, 1);
    this.accountsService.deleteAccount(this.account.id)
    .subscribe(res => {
      this.deletingAccount.emit(this.index)
      this.alertService.success("Account deleted", true);
    },
    error => {
      this.alertService.error(error);
    });
  }



}
