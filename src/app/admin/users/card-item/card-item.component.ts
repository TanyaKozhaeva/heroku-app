import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from '../../../services/cards.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.sass'],
  providers: [CardsService]
})
export class CardItemComponent implements OnInit {
  @Input() card;

  constructor( private cardsService: CardsService) { }

  ngOnInit() {
  }

  disableCard(){
    console.log(this.card)
    this.card.blocked ? this.card.blocked=false : this.card.blocked=true;
    this.cardsService.blockCard(this.card);
  }

}
