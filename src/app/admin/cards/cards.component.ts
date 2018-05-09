import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../alert/alert.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
  providers: [CardsService, AlertService]
})
export class CardsComponent implements OnInit {
  cards: any[]=[];
  accountId;
  constructor(
    private cardsService: CardsService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('id');
    this.getCards();
  }


  
  private getCards() {
    this.cardsService.getCards(this.accountId)
    .subscribe(res => {
      this.cards = res;
    });
  }


  deleteCard(i){
    this.cards.splice(i, 1);
  }
  /*
  disableCard(i, id){
    //this.card.blocked ? this.card.blocked=false : this.card.blocked=true;
    this.cardsService.blockCard(id);
  }
  */

}
