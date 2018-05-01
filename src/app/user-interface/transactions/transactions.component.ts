import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass'],
  providers: [CardsService]
})
export class TransactionsComponent implements OnInit {
//@Input() currentUser;
//currentUser = JSON.parse(localStorage.getItem('currentUser'));
userId;
cards;
transactions;
dateFrom;
// dateForm;


  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    //console.log(this.userId)
    this.getCards();
    
  }

  

  // currentDate(){
  //   const currentDate = new Date();
  //   return currentDate.toISOString().substring(0, 10);
  //   this.dateForm = return currentDate.toISOString().substring(0, 10);
  // }

  private getCards(){
    this.cardsService.getCards(this.userId)
    .subscribe (res =>{
      this.cards = res;
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
      from: this.dateFrom
      // to: dateTo.value
    }
    console.log(data)
    this.cardsService.transactionsFilter(data)
    .subscribe (res =>{
      this.transactions = res;
    })
  }

 pay(from, to, transactionAmount){
    console.log(from.value)
    console.log(to.value)
    console.log(transactionAmount.value)
  }

}
