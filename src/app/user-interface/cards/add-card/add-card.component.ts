import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Card } from '../add-card/card'
import { CardsService } from '../../../services/cards.service';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { AddCardService } from '../../../services/addcard.service';
import { AddFormService } from '../../../services/add-form.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.sass'],
  providers: [
    CardsService,
    AddCardService,
    AddFormService]
})


export class AddCardComponent implements OnInit {
  
//@Input() currentUser;
//currentUser = JSON.parse(localStorage.getItem('currentUser'));
//@Output() addingCard = new EventEmitter;////
numberMask: any[] = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
expiredMask: any[] = [/\d/, /\d/, '/', /\d/, /\d/]
currencyMask = createNumberMask({ prefix: '', suffix: 'UAH', thousandsSeparatorSymbol: '.', allowDecimal: true, decimalSymbol: ',' })
userId;
cardModel = new Card();

/*cardModel = {
  userId: 'number'
};*/
  constructor( 
    private cardsService: CardsService,
    private addCardService: AddCardService
  ) { }

  ngOnInit() {
    //this.cardModel = new Card(this.currentUser.id);
   }
   

   addCard(){
     this.cardModel.userId = this.userId;
     this.cardsService.addCard(this.cardModel)
     .subscribe(res => {
     //this.addingCard.emit(res);////
     //this.addCardService.addingCard.emit(this.cardModel);
     })
     }






}
