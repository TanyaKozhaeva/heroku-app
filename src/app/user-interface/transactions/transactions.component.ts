import { Component, OnInit, Input } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass'],
  providers: [CardsService]
})
export class TransactionsComponent implements OnInit {
//@Input() currentUser;
//currentUser = JSON.parse(localStorage.getItem('currentUser'));
currentUser;
cards;

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currentUser = this.route
      .queryParamMap
      .map(params => 
        console.log(params)
        //params.get('currentUser')
      );
    this.getCards()
  }

  private getCards(){
    console.log(this.currentUser)
    this.cardsService.getCards(this.currentUser.id)
    .subscribe (res =>{
      this.cards = res;
    })
  }

 pay(from, to, transactionAmount){
    console.log(from.value)
    console.log(to.value)
    console.log(transactionAmount.value)
  }

}
