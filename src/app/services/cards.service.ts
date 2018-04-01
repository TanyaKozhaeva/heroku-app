import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable()
export class CardsService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor( private http: HttpClient) { }

  getCards(userId){
    return this.http.get('https://apihonestbank.herokuapp.com/wallets/account/' + userId)
    //.map(res =>
      //console.log(res))
      //res.json());
  }

  addCard(card) {
    return this.http.post('http://apihonestbank.herokuapp.com/wallets', card)
    //.map(res =>
    //  res.json());
  }

}

