import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable()
export class AccountsService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor( private http: HttpClient) { }

  getAccounts(userId){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/accounts/' + userId)
  }

  getProducts(){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/products')
  }


  addAccount(account) {
    //return this.http.post('https://apihonestbank.herokuapp.com/accounts/', account)
    return this.http.post('https://jsonplaceholder.typicode.com/posts', account)
  }


}
