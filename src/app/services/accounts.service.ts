import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';


@Injectable()
export class AccountsService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor( private http: HttpClient) { }

  getAccounts(userId){
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
  }


  transactionsFilter(data, accountId){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/transactions/account/' + accountId, data)
  }

  makePayment(transaction){
    return this.http.post<any[]>('https://apihonestbank.herokuapp.com/transactions/', transaction)
  }

}
