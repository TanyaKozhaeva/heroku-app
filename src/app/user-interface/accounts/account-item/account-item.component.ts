import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { Subscription } from 'rxjs/Subscription';
import { AddCardService } from '../../../services/addcard.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.sass'],
  providers: [CardsService]
})
export class AccountItemComponent implements OnInit {
  @Input() account;
  //accountId = this.account.id
  cards: any[]=[];
  //cards;
  accountId;
  showTransactions = false;
  //showCards = false;
  transactions;
  //accountId = this.account.id;
 

  subscription: Subscription;


  constructor(
    private cardsService: CardsService,
    private addCardService: AddCardService,
    private route: ActivatedRoute
  ) {
     this.subscription = addCardService.subscription$.subscribe(
      data => {
        if(data == null){
          return
        }
       // this.addCard(data);
       //this.cards.push(data)
       this.getCards();
        console.log(this.cards)
      }
    )
    
  }


  ngOnInit() {
    this.accountId = this.account.id;
    this.getCards()
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private getCards() {
    //this.cardsService.getCards(this.account.id)
    //this.showCards ? this.showCards = false : this.showCards = true;
    //console.log(this.showCards);
      this.cardsService.getCards(this.accountId)
    .subscribe(res => {
      this.cards = res;
      console.log(res)
    });
  }

  showingTransactions(){
    this.showTransactions ? this.showTransactions = false : this.showTransactions = true;

  }

  transactionsFilter(){
    let data = {
      //from: this.dateFrom
      // to: dateTo.value

    }
    console.log(data)
    this.cardsService.transactionsFilter(data, this.accountId)
    .subscribe (res =>{
      this.transactions = res;
    })
  }

  /*
  private getCards() {
    //this.cardsService.getCards(this.account.id)
    if(!this.cards){
      this.cardsService.getCards(this.accountId)
    .subscribe(res => {
      this.cards = res;
      console.log(res)
    })
    }
    console.log(this.cards)
    return
  }*/
/*
  addCard(card){
    if (card == null){
      return
    }
    this.cards.push(card);
  }*/

}
