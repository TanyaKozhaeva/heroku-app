import { Component, OnInit} from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';
import { LoaderService } from '../../loader/loader.service';

@Component({
  //selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.sass']
})
export class AccountItemComponent implements OnInit {
  userId;
  accountId;
  accountItem;
  cards;
  showTransactions = false;



  constructor(
    private loaderService: LoaderService,
    private cardsService: CardsService,
    private accountsService: AccountsService,
    private route: ActivatedRoute
  ) {
    this.accountId = this.route.snapshot.paramMap.get('id');
    this.userId = this.route.snapshot.paramMap.get('userId');
  }


  ngOnInit() {
    this.loaderService.executeAction(true);
    this.getAccountDetails();
    this.getCards();
  }



  private getAccountDetails() {
    this.accountsService.getAccountDetails(this.accountId)
  .subscribe(res => {
    this.accountItem = res;
  });
}


  private getCards() {
      this.cardsService.getCards(this.accountId)
    .subscribe(res => {
      this.cards = res;
      this.loaderService.executeAction(false);
    });
  }


  showingTransactions(){
    this.showTransactions ? this.showTransactions = false : this.showTransactions = true;

  }
}
