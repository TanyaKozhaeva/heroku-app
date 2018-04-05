import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import { AddCardService } from '../../services/addcard.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
  providers: [CardsService]
})
export class CardsComponent implements OnInit, OnChanges, OnDestroy {
userId;
cards: any[]=[];
addCardForm = false;


//@Input() currentUser;
subscription: Subscription;

//currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor(
    private cardsService: CardsService,
    private addCardService: AddCardService,
    private route: ActivatedRoute
  ) { 
    //this.subscription = this.addCardService.addingCard.subscribe((data) => this.cards.push(data)) 
   this.subscription = addCardService.subscription$.subscribe(
     data => {
       console.log(data)
       this.addCard(data);
     }
   )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

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
    console.log(card)
    if (card == null){
      return
    }
    console.log(this.cards)
    this.cards.push(card);
  }

}
