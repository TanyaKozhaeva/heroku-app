import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
@Component({
  selector: '[app-card-item]',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass'],
  providers: [CardsService],
  animations: [
    trigger('showActions', [
      state('true', style({
        opacity: '1',
        height: '*'
        //transform: 'scaleY(1) translateY(100%)'
      })),
      state('false',   style({
        opacity: '0',
        height: '0'
        //transform:'scaleY(0) translateY(100%)',

      })),
      transition('false <=> true', animate('100ms ease-in'))
    ])
]
})


export class CardItemComponent implements OnInit {
  @Input() card;
  @Input() index;
  @Output() deletingCard = new EventEmitter();
  showActions=false;


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

    .subscribe(res =>{
      console.log(res)
    })

  }

  showingActions(){
    this.showActions ? this.showActions=false : this.showActions=true;
  }

}
