import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CardsService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor( private http: Http) { }

  getCards(userId){
    console.log(userId)
    return this.http.get('https://apihonestbank.herokuapp.com/wallets/account/' + userId, {headers: this.headers})
    .map(res =>
      res.json());
  }

  addCard(card) {
    console.log(card);
    return this.http.post('http://apihonestbank.herokuapp.com/wallets', card, {headers: this.headers})
    .map(res =>
      res.json());
  }

}

