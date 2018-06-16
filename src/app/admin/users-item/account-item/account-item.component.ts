import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../../../services/accounts.service';
import { AlertService } from '../../../alert/alert.service';
import { LoaderService } from '../../../loader/loader.service';
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
      transition('false => true', animate('100ms ease-in')),
      transition('true => false', animate('100ms ease-out'))
    ])
]
})
export class AccountItemComponent implements OnInit {
@Input() account;
@Input() index;
@Output() deletingAccount = new EventEmitter();
showActions=false;
showSpinner;
rechargeInput = false;

  constructor(
      private loaderService: LoaderService,
    private accountsService: AccountsService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

   showingActions() {
    this.showActions ? this.showActions = false : this.showActions = true;
  }

  showRechargeInput() {
    this.rechargeInput ? this.rechargeInput = false : this.rechargeInput = true;
  }

  rechargeAccount() {
    this.loaderService.executeAction(true);
    this.showActions = false;
    let data = {
      id: this.account.id,
      amount: this.account.amount,
      blocked: this.account.blocked
    }
    this.accountsService.rechargeAccount(data)
    .subscribe(res => {
      this.alertService.success('Success');
      this.rechargeInput = false;
      this.loaderService.executeAction(false);
    },
    error => {
      this.alertService.error("Error");
      this.getAccountItem();
      this.rechargeInput = false;
      this.loaderService.executeAction(false);
    }
     );
  }

  getAccountItem(){
    this.accountsService.getAccountDetails(this.account.id)
    .subscribe(res => {
      this.account = res;
    })
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
    let data = {
      id: this.account.id,
      amount: this.account.amount,
      blocked: this.account.blocked
    }
    this.accountsService.blockAccount(data)
    .subscribe(res => {
      return
    },
    error => {
      this.alertService.error(error);
      this.getAccountItem()
    });
  }
  closeActionsList(){
    console.log(this.showActions)
    this.showActions = false;
  }
}
