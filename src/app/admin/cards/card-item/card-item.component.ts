import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardsService } from '../../../services/cards.service';
import { ErrorPopUpService } from '../../../error-pop-up/error-pop-up.service';
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
      })),
      state('false',   style({
        opacity: '0',
        height: '0'
      })),
      transition('false <=> true', animate('100ms ease-in'))
    ])
]
})


export class CardItemComponent implements OnInit {
  @Input() card;
  @Input() index;
  @Input() currentAccountStatus;
  @Output() deletingCard = new EventEmitter();
  showActions = false;
  showSpinner;


  constructor( private cardsService: CardsService,
  private errorPopUpService: ErrorPopUpService) { }

  ngOnInit() {
  }

  deleteCard(){
    this.showSpinner = true;

    this.cardsService.deleteCard(this.card.id)
    .subscribe(res =>{
      this.deletingCard.emit(this.index)
      this.showSpinner = false;
    },
  error => {
    this.errorPopUpService.error('Something went wrong. Please try again later');
    this.showSpinner = false;
  })
  }

  disableCard() {
    this.card.blocked ? this.card.blocked = false : this.card.blocked = true;
    this.cardsService.blockCard(this.card);
  }

  showingActions() {
    this.showActions ? this.showActions = false : this.showActions = true;
  }

}
