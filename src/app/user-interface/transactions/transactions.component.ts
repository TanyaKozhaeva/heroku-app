import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass'],
  providers: [CardsService]
})
export class TransactionsComponent implements OnInit {
@Input() currentUser;
cards = [];

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.getCards()
  }

  private getCards(){
    this.cardsService.getCards(this.currentUser)
    .subscribe (res =>{
      this.cards = res;
    })
  }

 pay(from, to, transactionAmount){
    console.log(from.value)
    console.log(to.value)
    console.log(transactionAmount.value)
  }

}
