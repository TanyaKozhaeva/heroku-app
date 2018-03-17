import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Card } from '../add-card/card'
import { CardsService } from '../../../services/cards.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.sass'],
  providers: [CardsService]
})
export class AddCardComponent implements OnInit {
@Input() currentUser;
//currentUser = JSON.parse(localStorage.getItem('currentUser'));
@Output() addingCard = new EventEmitter;////
cardModel = new Card();

/*cardModel = {
  userId: 'number'
};*/




  constructor( private cardsService: CardsService) { }

  ngOnInit() {
    //this.cardModel = new Card(this.currentUser.id);
   }


   addCard(){
     this.cardModel.userId = this.currentUser.id
     this.cardsService.addCard(this.cardModel)
     .subscribe(res => {
     this.addingCard.emit(res);////
     })
     }






}
