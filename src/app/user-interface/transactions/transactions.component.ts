import { Component, OnInit, Input, DoCheck, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Transaction } from './transaction';
import { AlertService } from '../../alert/alert.service';
import { NgForm } from '@angular/forms';
import { LoaderService } from '../../loader/loader.service';
import { AccountsService } from '../../services/accounts.service';


@Component({
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
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
    })
  }

  enteringRecipientNumber(){
    this.transaction.destinationName = "";
    this.inputField ? this.inputField = false : this.inputField = true;
  }

  private getCurrency() {
    for(let i = 0; i < this.accounts.length; i++) {
      if(this.accounts[i].number == this.transaction.sourceName){
        this.transaction.currency = this.accounts[i].currency;
      }
    }
  }


 makePayment(){
   this.loaderService.executeAction(true);
    this.accountsService.makePayment(this.transaction)
    .subscribe (res =>{
      this.alertService.success("Payment was sent", false);
      this.addCardForm.reset();
      this.getAccounts();
      this.loaderService.executeAction(false);
    },
    error => {
      this.loaderService.executeAction(false);
      this.alertService.error(error);
    })
  }

}
