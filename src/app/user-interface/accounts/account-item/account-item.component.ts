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

  subscription: Subscription;


  constructor(
    private cardsService: CardsService,
    private addCardService: AddCardService,
    private route: ActivatedRoute
  ) {
     this.subscription = addCardService.subscription$.subscribe(
      data => {
       // this.addCard(data);
       this.getCards();
        console.log(data)
      }
    )
  }


  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private getCards() {
    //this.cardsService.getCards(this.account.id)
    this.cardsService.getCards(1)
    .subscribe(res => {
      this.cards = res;
      console.log(res)
    });
  }
/*
  addCard(card){
    if (card == null){
      return
    }
    this.cards.push(card);
  }*/

}
