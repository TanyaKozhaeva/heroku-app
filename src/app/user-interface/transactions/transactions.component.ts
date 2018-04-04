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
userId;
cards;

  constructor(
    private cardsService: CardsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    //console.log(this.userId)
    this.getCards()
  }

  private getCards(){
    //console.log(this.userId)
    this.cardsService.getCards(this.userId)
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
