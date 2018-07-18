import { Component, OnInit} from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';
import { LoaderService } from '../../loader/loader.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.sass'],
  animations: [
    trigger('showBtn', [
      transition(':enter', [
        style({
          transform: 'scaleX(0)'
        }),
        animate(".5s ease-in-out", style({
          opacity: 1,
          transform: 'scaleX(1)'
        }))
      ]),
      transition(':leave', [
        style({
          transform: 'scaleX(1)'
        }),
        animate(".5s ease-in-out", style({
          transform: 'scaleX(0)'
        }))
      ])
    ]),
    trigger('showTransactions', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scaleY(0)',
          transformOrigin: "top"
        }),
        animate(".8s ease-in-out", style({
          opacity: 1,
          transform: 'scaleY(1)'
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          transform: 'scaleY(1)',
          transformOrigin: "top"
        }),
        animate(".5s ease-in-out", style({
          opacity: 0,
          transform: 'scaleY(0)'
        }))
      ])
    ])
  ]
})
export class AccountItemComponent implements OnInit {
  accountId;
  accountItem;
  cards;
  showTransactions = false;
  showBtn = false;



  constructor(
    private loaderService: LoaderService,
    private cardsService: CardsService,
    private accountsService: AccountsService,
    private route: ActivatedRoute
  ) {
    this.accountId = this.route.snapshot.paramMap.get('id');
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
      this.showBtn = true;
    });
  }


  showingTransactions(){
    this.showTransactions ? this.showTransactions = false : this.showTransactions = true;

  }
}
