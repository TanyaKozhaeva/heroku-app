import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Card } from '../add-card/card'
import { CardsService } from '../../../services/cards.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css'],
  providers: [CardsService]
})
export class AddCardComponent implements OnInit {
@Input() currentUser;
@Output() addingCard = new EventEmitter;////


/*cardModel = {
  userId: 'number'
};*/

//cardModel = new Card(this.currentUser.id);

cardModel;
  constructor( private cardsService: CardsService) { }

  ngOnInit() {
    //this.cardModel = new Card(this.currentUser.id);
   }


   addCard(){
     this.cardsService.addCard(this.cardModel)
     .subscribe(res => {
      this.addingCard.emit(res);////
      //this.cardModel = new Card(this.currentUser.id);
     })
     }






}
