import { Component, OnInit, Input, DoCheck, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Transaction } from './transaction';
import { AlertService } from '../../alert/alert.service';
import { NgForm } from '@angular/forms';
import { LoaderService } from '../../loader/loader.service';
import { AccountsService } from '../../services/accounts.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query
} from '@angular/animations';


@Component({
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass'],
  animations: [
    trigger('sourceAccountsDisplay', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scaleY(0)'
        }),
        animate(".3s .6s ease-in-out", style({
          opacity: 1,
          transform: 'scaleY(1)'
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          transform: 'scaleY(1)'
        }),
        animate(".1s ease-in-out", style({
          opacity: 0,
          transform: 'scaleY(0)'
        }))
      ])
    ]),
    trigger('destAccountsDisplay', [
      transition(':enter', [
        style({
          transform: 'scaleY(0)'
        }),
        animate(".3s .6s ease-in-out", style({
          opacity: 1,
          transform: 'scaleY(1)'
        }))
      ]),
      transition(':leave', [
        style({
          transform: 'scaleY(1)'
        }),
        animate(".1s ease-in-out", style({
          transform: 'scaleY(0)'
        }))
      ])
    ])
  ]
})
export class TransactionsComponent implements OnInit, DoCheck {
@ViewChild('paymentForm') public addCardForm: NgForm;
numberMask: any[] = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
currentUser;
userId;
accounts:any[] = [];
transactions:any[] = [];
transaction = new Transaction();
inputField = false;
sourceAccount;
destinationAccount;
transactionSum;
sourceAccountsDisplay = false;
destinationAccountsDisplay = false;
inputVisible = false;




  constructor(
    private loaderService: LoaderService,
    private accountsService: AccountsService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
 this.userId = this.currentUser.userInfo.userId;
  }

  ngOnInit() {
    this.loaderService.executeAction(true);
    this.getAccounts();
  }

  ngDoCheck(){
    this.getCurrency();
  }

  private getAccounts(){
    this.accountsService.getAccounts(this.userId)
    .subscribe (res =>{
      this.accounts = res;
      this.transaction.sourceName = this.accounts[0].number;
      this.loaderService.executeAction(false);
      this.sourceAccount = this.accounts[0];
    })
  }

  enteringRecipientNumber(){
    this.transaction.destinationName = undefined;
    this.inputField ? this.inputField = false : this.inputField = true;
  }

  showSourceAccountList(){
    this.sourceAccountsDisplay ? this.sourceAccountsDisplay = false : this.sourceAccountsDisplay = true;
  }
  showDestAccountList(){
    this.destinationAccountsDisplay ? this.destinationAccountsDisplay = false : this.destinationAccountsDisplay = true;
  }
  showInput(){
    if(!this.inputVisible && this.destinationAccount){
      this.destinationAccount = null;
    }
    this.inputVisible ? this.inputVisible = false : this.inputVisible = true;
  }

  private getCurrency() {
    for(let i = 0; i < this.accounts.length; i++) {
      if(this.accounts[i].number == this.transaction.sourceName){
        this.transaction.currency = this.accounts[i].currency;
      }
    }
  }


 makePayment(){
   this.alertService.waitingResponse();
   this.transaction.sourceName = this.sourceAccount.number;
   this.transaction.destinationName = this.destinationAccount;
   this.transaction.sum = this.transactionSum;
   this.transaction.currency = this.sourceAccount.currency;
    this.accountsService.makePayment(this.transaction)
    .subscribe (res =>{
      this.alertService.success(this.transaction.sum + " " + this.transaction.currency + " " + "transferred", false);
      this.addCardForm.reset();
      this.getAccounts();
    },
    error => {
      this.alertService.error(error);
    })
  }

}
