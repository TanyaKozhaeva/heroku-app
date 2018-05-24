import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable()
export class CardsService {
  //private headers = new Headers({'Content-Type': 'application/json'});

  constructor( private http: HttpClient) { }

  getCards(accountId){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/wallets/account/' + accountId)
    //return this.http.get<any[]>('https://apihonestbank.herokuapp.com/wallets/account/1')
  }

  getAccounts(userId){
   return this.http.get<any[]>('https://apihonestbank.herokuapp.com/accounts/')
    //return this.http.get<any[]>('https://apihonestbank.herokuapp.com/accounts/user/' + userId)
  }


  getTransactions(){
   // return this.http.get<any[]>('https://apihonestbank.herokuapp.com/transactions' + userId)
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/transactions')
  }

  transactionsFilter(data, accountId){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/transactions/account/' + accountId, data)
  }

  makePayment(transaction){
    return this.http.post<any[]>('https://apihonestbank.herokuapp.com/transactions/', transaction)
  }

  addCard(card, accountId) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    };
    console.log(accountId)
    return this.http.post('https://apihonestbank.hherokuapp.com/wallets/account/'+ accountId, card)
    //return this.http.post('https://jsonplaceholder.typicode.com/posts', card)
  }

  deleteCard(cardId){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+ cardId)
    //return this.http.delete('http://jsonplaceholder.typicode.com/wallets/'+ cardId)
  };

  blockCard(card){
    return this.http.put('https://apihonestbank.herokuapp.com/wallets/' + card.id, card)
  }

}
