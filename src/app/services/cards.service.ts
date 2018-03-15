import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CardsService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor( private http: Http) { }

  getCards(currentUser){
    return this.http.get('http://jsonplaceholder.typicode.com/todos/?userId=' + currentUser.id)
    .map(res =>
      res.json());
  }

  addCard(card) {
    console.log(card);
    return this.http.post('http://jsonplaceholder.typicode.com/todos', card, {headers: this.headers})
    .map(res =>
      res.json());
  }

}

