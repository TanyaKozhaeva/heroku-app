import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable()
export class CardsService {

  constructor( private http: HttpClient) { }

  getCards(accountId){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/wallets/account/' + accountId)
  }

  addCard(card, accountId) {
    return this.http.post('https://apihonestbank.herokuapp.com/wallets/account/'+ accountId, card)
  }

  deleteCard(cardId){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+ cardId)
  };

  blockCard(card){
    return this.http.put('https://apihonestbank.herokuapp.com/wallets/' + card.id, card)
  }

}
