import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
  providers: [CardsService]
})
export class CardsComponent implements OnInit, OnChanges {
userId;
cards;
addCardForm = false;


//@Input() currentUser;


//currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getCards();
  }
  ngOnChanges() {
    this.getCards();
  }
  displayForm() {
    this.addCardForm ? this.addCardForm = false : this.addCardForm = true;
  }

  private getCards() {
    this.cardsService.getCards(this.userId)
    .subscribe(res => {
      this.cards = res;
    });
  }
  
  addCard(card){
    this.cards.push(card);
  }

}
