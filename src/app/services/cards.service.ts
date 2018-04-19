import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable()
export class CardsService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor( private http: HttpClient) { }

  getCards(userId){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/wallets/account/' + userId)
  }

  getTransactions(){
   // return this.http.get<any[]>('https://apihonestbank.herokuapp.com/transactions' + userId)
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/transactions')
  }

  transactionsFilter(data){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/transactions', data)
  }

  addCard(card) {
    return this.http.post('http://apihonestbank.herokuapp.com/wallets/', card)
    //return this.http.post('https://jsonplaceholder.typicode.com/posts', card)
  }

  blockCard(card){
    console.log(card)
    //const headers = {
     // headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    //};
    return this.http.put('http://apihonestbank.herokuapp.com/wallets/' + card.id, card)
    .map(res =>
      console.log(res)
    )
  }

}
