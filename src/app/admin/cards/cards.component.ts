import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../alert/alert.service';
import { AccountsService } from '../../services/accounts.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
  providers: [CardsService, AccountsService, AlertService]
})
export class CardsComponent implements OnInit {
  cards: any[]=[];
  accountId;
  currentAccount;

  constructor(
    private cardsService: CardsService,
    private accountsService: AccountsService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.accountId = this.route.snapshot.paramMap.get('id');
    this.getCards();
    this.getAccountDetails();
    
  }


  
  private getCards() {
    console.log(this.accountId)
    this.cardsService.getCards(this.accountId)
    .subscribe(res => {
      this.cards = res;
      console.log(this.cards)
    });
    
  }


  deleteCard(i){
    this.cards.splice(i, 1);
  }

  private getAccountDetails(){
    this.accountsService. getAccountDetails(this.accountId)
    .subscribe(res => {
      this.currentAccount = res;
    });
  }
  /*
  disableCard(i, id){
    //this.card.blocked ? this.card.blocked=false : this.card.blocked=true;
    this.cardsService.blockCard(id);
  }
  */

}
