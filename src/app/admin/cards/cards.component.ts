import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '../../alert/alert.service';
import { AccountsService } from '../../services/accounts.service';
import { LoaderService } from '../../loader/loader.service';

@Component({
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  cards: any[] = [];
  accountId;
  currentAccount;

  constructor(
    private loaderService: LoaderService,
    private cardsService: CardsService,
    private accountsService: AccountsService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) {
    this.accountId = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.loaderService.executeAction(true);
    this.getAccountDetails();
    this.getCards();
  }



  private getCards() {
    this.cardsService.getCards(this.accountId)
    .subscribe(res => {
      this.cards = res;
      this.loaderService.executeAction(false);
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
}
