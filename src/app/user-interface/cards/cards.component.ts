import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { ActivatedRoute } from '@angular/router';
import { AddCardService } from '../../services/addcard.service';
//import { AccountsService } from '../../services/accounts.service';
import { Subscription } from 'rxjs/Subscription';
import { AddAccountService } from '../../services/addaccount.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass'],
  providers: [CardsService]
})
export class CardsComponent implements OnInit, OnChanges, OnDestroy {
userId;
accounts: any[]=[];
cards: any[]=[];
addCardForm = false;

subscription: Subscription;


  constructor(
    private cardsService: CardsService,
    private addCardService: AddCardService,
    private addAccountService: AddAccountService,
    private route: ActivatedRoute
  ) {
  /*
   this.subscription = addCardService.subscription$.subscribe(
     data => {
      this.getAccounts()
     })*/
     this.subscription = addAccountService.subscription$.subscribe(
      data => {
        this.addAccount(data);
        console.log(data)
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.getAccounts();
  }
  ngOnChanges() {
    this.getAccounts()
  }


  private getAccounts(){
    this.cardsService.getAccounts(this.userId)
    .subscribe(res => {
      this.accounts = res;
      console.log(res)
    });
  }
/*
  addCard(card){
    if (card == null){
      return
    }
    this.cards.push(card);
  }*/

  addAccount(account){
    if (account == null){
      return

    }
    this.accounts.push(account);
    console.log(this.accounts)
  }


}
