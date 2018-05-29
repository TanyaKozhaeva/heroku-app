import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../../../services/accounts.service';
import { AlertService } from '../../../alert/alert.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: '[app-account-item]',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.sass'],
  animations: [
    trigger('showActions', [
      state('true', style({
        opacity: '1',
        height: '*'
      })),
      state('false',   style({
        opacity: '0',
        height: '0'
      })),
      transition('false => true', animate('130ms ease-in')),
      transition('true => false', animate('130ms ease-out'))
    ])
]
})
export class AccountItemComponent implements OnInit {
@Input() account;
@Input() index;
@Output() deletingAccount = new EventEmitter();
showActions=false;
showSpinner;

  constructor(
    private accountsService: AccountsService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

   showingActions() {
    this.showActions ? this.showActions = false : this.showActions = true;
  }

  deleteAccount() {
    this.showSpinner = true;
    this.accountsService.deleteAccount(this.account.id)
    .subscribe(res => {
      this.deletingAccount.emit(this.index);
      this.alertService.success('Account deleted', true);
    },
    error => {
      this.alertService.error(error);
    });
    this.showSpinner = false;
  }

  disableAccount(){
    this.account.blocked ? this.account.blocked=false : this.account.blocked=true;
    this.accountsService.blockAccount(this.account)
  }

}