import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardsService } from '../../services/cards.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [CardsService]
})
export class CardsComponent implements OnInit {
cards = [];
addCardForm = false;

@Input() currentUser;



  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    //this.getCards();
  }
  displayForm() {
    this.addCardForm ? this.addCardForm = false : this.addCardForm = true;
  }
/*
Удалила, пока нет данных
  private getCards() {
    this.cardsService.getCards(this.currentUser.id)
    .subscribe(res => {
      this.cards = res.cards;
    });
  }
  */
  addCard(card){
    this.cards.push(card);
    console.log(this.cards);
  }

}
