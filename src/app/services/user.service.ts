import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor( private http: Http) { }

  create(model){
    return this.http.post('http://jsonplaceholder.typicode.com/users', model, {headers: this.headers})
    .map(res =>
     res.json());
  };

  getUsers(){
    return this.http.get('http://apihonestbank.herokuapp.com/users', {headers: this.headers})
    .map(res =>
      res.json());
  }
}

  
