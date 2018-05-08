import { Component, OnInit, Input, OnChanges, DoCheck, ViewChild } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Transaction } from './transaction';
import { AlertService } from '../../alert/alert.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass'],
  providers: [CardsService]
})
export class TransactionsComponent implements OnChanges, OnInit, DoCheck {
@ViewChild('paymentForm') public addCardForm: NgForm;
numberMask: any[] = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
userId;
accounts: any[]=[];
transactions;
transaction = new Transaction();
currentDate;
inputField = false;
// dateForm;


  constructor(
    private cardsService: CardsService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {this.currentDate = new Date();
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    //console.log(this.userId)
    this.getAccounts();
    //this.getCurrency();
   // console.log(this.transaction)
    
   
  }
  ngOnChanges(){
    //this.getAccounts();
    //this.getCurrency();
   //console.log(this.transaction)
  }
  ngDoCheck(){
    //this.getAccounts();
    this.getCurrency();
  }


  /*

   currentDate(){
    const currentDate = new Date();
    console.log(currentDate.toString())
   return currentDate.toString()
   
     //this.dateForm = return currentDate.toISOString().substring(0, 10);
   }
   */

  private getAccounts(){
    this.cardsService.getAccounts(this.userId)
    .subscribe (res =>{
      this.accounts = res;
      this.transaction.sourceName = this.accounts[0].number

      
    
    })
  }

  enteringRecipientNumber(){
    this.transaction.destinationName = "";
    this.inputField ? this.inputField = false : this.inputField = true;
  }

  private getCurrency(){
    for(var i=0; i<this.accounts.length; i++){
      if(this.accounts[i].number == this.transaction.sourceName){
        this.transaction.currency = this.accounts[i].currency;
      } 
    }
  }

  private getTransactions(){
    this.cardsService.getTransactions()
    .subscribe (res =>{
      this.transactions = res;
    })
  }

  transactionsFilter(){
    let data = {
      //from: this.dateFrom
      // to: dateTo.value
    }
    console.log(data)
    this.cardsService.transactionsFilter(data, this.userId)
    .subscribe (res =>{
      this.transactions = res;
    })
  }

 makePayment(){
   console.log(this.transaction)
    this.cardsService.makePayment(this.transaction)
    .subscribe (res =>{
      //this.transactions = res;
      this.alertService.success("Payment was sent", false);
      this.addCardForm.reset();
    },
    error => {
      this.alertService.error(error);
    })
  }

  cansel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
