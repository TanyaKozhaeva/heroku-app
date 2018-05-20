import { Injectable } from '@angular/core';
//import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable()
export class AccountsService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor( private http: HttpClient) { }
/*
  getAccounts(userId){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/accounts/' + userId)
  }
  */

  getAccounts(userId){
    //return this.http.get<any[]>('https://apihonestbank.herokuapp.com/accounts/')
     return this.http.get<any[]>('https://apihonestbank.herokuapp.com/accounts/user/' + userId)
   }

  getAccountDetails(accountId){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/accounts/'+ accountId)
  }

  getProducts(){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/products')
  }

  deleteAccount(accountId){
    return this.http.delete('https://apihonestbank.herokuapp.com/accounts/'+ accountId)
    //return this.http.delete('http://jsonplaceholder.typicode.com/users/'+ accountId)
  };


  addAccount(account) {
    //return this.http.post('https://apihonestbank.herokuapp.com/accounts/', account)
    return this.http.post('https://jsonplaceholder.typicode.com/posts', account)
  }


}
