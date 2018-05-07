import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { Transaction } from './transaction';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass'],
  providers: [CardsService]
})
export class TransactionsComponent implements OnInit, OnChanges {
//@Input() currentUser;
//currentUser = JSON.parse(localStorage.getItem('currentUser'));
userId;
accounts;
transactions;
transaction = new Transaction();
currentDate;
sourceName;
// dateForm;


  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) {this.currentDate = new Date();
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    //console.log(this.userId)
    this.getAccounts();
    console.log(this.transaction)
    
   
  }
  ngOnChanges(){

   console.log(this.transaction)
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
      //this.sourceName = this.accounts[0].number
      this.transaction.sourceName = this.accounts[0].number
      //this.transaction.currency = this.transaction.sourceName.currency
      console.log(this.transaction)
      
    
    })
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

 makeTransaction(){
   console.log(this.transaction)
   /*
    console.log(from.value)
    console.log(to.value)
    console.log(transactionAmount.value)
    let data = {
      sourceName: from.value,
      destinationName: to.value,
      sum: transactionAmount.value
    }*/
    /*this.cardsService.makeTransaction(this.transaction)
    .subscribe (res =>{
      this.transactions = res;
    })*/
  }

}
