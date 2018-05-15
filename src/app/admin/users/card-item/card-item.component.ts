import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardsService } from '../../../services/cards.service';

@Component({
  selector: '[app-card-item]',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass'],
  providers: [CardsService]
})
export class CardItemComponent implements OnInit {
  @Input() card;
  @Input() index;
  @Output() deletingCard = new EventEmitter();
  showActions;


  constructor( private cardsService: CardsService) { }

  ngOnInit() {
  }
  deleteCard(){
    console.log(this.card.id)
    this.cardsService.deleteCard(this.card.id)
    .subscribe(res =>{
      this.deletingCard.emit(this.index)
    })
    
  }
  disableCard(){
    console.log(this.card)
    this.card.blocked ? this.card.blocked=false : this.card.blocked=true;
    this.cardsService.blockCard(this.card)
    /*
    .subscribe(res =>{
      console.log(res)
    })
    */
  }

  showingActions(){
    this.showActions ? this.showActions=false : this.showActions=true;
  }

}
