import { Component, OnInit, Input, DoCheck, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CardsService } from '../../../services/cards.service';
import { Subscription } from 'rxjs/Subscription';
import { AddCardService } from '../../../services/addcard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from '../../../services/accounts.service';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.sass'],
  providers: [CardsService, AccountsService]
})
export class AccountItemComponent implements OnInit {
  @Input() account;
  //accountId = this.account.id
  userId;
  //cards;
  accountId;
  accountItem;
  cards: any[]=[];
  showTransactions = false;
  //showCards = false;
  



  subscription: Subscription;


  constructor(
    private cardsService: CardsService,
    private accountsService: AccountsService,
    private addCardService: AddCardService,
    private router: Router,
    private route: ActivatedRoute
  ) {
     this.subscription = addCardService.subscription$.subscribe(
      data => {
        if(data == null){
          return
        }
       // this.addCard(data);
       //this.cards.push(data)
       this.getCards();
      }
    )



  }


  ngOnInit() {
    //this.accountId = this.account.id;
    this.accountId = this.route.snapshot.paramMap.get('id');
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.getAccountDetails();
    this.getCards();
  }



  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

  private getAccountDetails() {
    this.accountsService.getAccountDetails(this.accountId)
  .subscribe(res => {
    this.accountItem = res;
  });
}


  private getCards() {
    //this.cardsService.getCards(this.account.id)
    //this.showCards ? this.showCards = false : this.showCards = true;
    //console.log(this.showCards);
      this.cardsService.getCards(this.accountId)
    .subscribe(res => {
      this.cards = res;
    });
  }


  showingTransactions(){
    this.showTransactions ? this.showTransactions = false : this.showTransactions = true;

  }



  // navigate(){
  //   console.log('nav')
  //   this.router.navigate(['../transactions'], {relativeTo: '/user'});
  // }

  /*
  private getCards() {
    //this.cardsService.getCards(this.account.id)
    if(!this.cards){
      this.cardsService.getCards(this.accountId)
    .subscribe(res => {
      this.cards = res;
      console.log(res)
    })
    }
    console.log(this.cards)
    return
  }*/
/*
  addCard(card){
    if (card == null){
      return
    }
    this.cards.push(card);
  }*/

}
