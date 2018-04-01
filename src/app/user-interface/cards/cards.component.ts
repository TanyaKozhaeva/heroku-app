import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CardsService } from '../../services/cards.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
  providers: [CardsService]
})
export class CardsComponent implements OnInit, OnChanges {
cards;
addCardForm = false;


//@Input() currentUser;

currentUser = {
  id: 2
}

//currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.getCards();
  }
  ngOnChanges() {
    this.getCards();
  }
  displayForm() {
    this.addCardForm ? this.addCardForm = false : this.addCardForm = true;
  }

  private getCards() {
    this.cardsService.getCards(this.currentUser.id)
    .subscribe(res => {
      this.cards = res;
    });
  }
  
  addCard(card){
    this.cards.push(card);
  }

}
