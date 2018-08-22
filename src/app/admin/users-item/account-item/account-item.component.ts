import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountsService } from '../../../services/accounts.service';
import { AlertService } from '../../../alert/alert.service';
import { LoaderService } from '../../../loader/loader.service';
import { ErrorPopUpService } from '../../../error-pop-up/error-pop-up.service';
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
@Output() rechargingAccount = new EventEmitter();
showActions=false;
showSpinner;
rechargeInput = false;

  constructor(
      private loaderService: LoaderService,
    private accountsService: AccountsService,
    private alertService: AlertService,
    private errorPopUpService: ErrorPopUpService
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
    this.showActions = false;
    let data = {
      id: this.account.id,
      amount: this.account.amount,
      blocked: this.account.blocked
    }
    this.rechargingAccount.emit(data);
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
    },
    error => {
      this.errorPopUpService.error(error);
    });
    this.showSpinner = false;
  }

  disableAccount(){
    this.showSpinner = true;
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
      this.errorPopUpService.error(error);
      this.getAccountItem()
    });
    this.showSpinner = false;
  }
}
