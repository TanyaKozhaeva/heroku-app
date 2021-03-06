import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':  'application/json'
  })
  };

@Injectable()
export class AccountsService {

  constructor( private http: HttpClient) { }
/*
  getAccounts(userId){
     return this.http.get<any[]>('https://apihonestbank.herokuapp.com/accounts/user/' + userId, httpOptions)
   }
   */

   getAccounts(userId){
     return this.http.get<any[]>('assets/accounts.json')
   }


  getAccountDetails(accountId){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/accounts/'+ accountId)
  }

  getProducts(){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/products', httpOptions)
  }

  deleteAccount(accountId){
    return this.http.delete('https://apihonestbank.herokuapp.com/accounts/'+ accountId)
  }

  blockAccount(account){
    return this.http.put('https://apihonestbank.herokuapp.com/accounts/update', account)
  }
  rechargeAccount(account){
    return this.http.put('https://apihonestbank.herokuapp.com/accounts/update', account)
  }

  transactionsFilter(data, accountId){
    //return this.http.get<any[]>('https://apihonestbank.herokuapp.com/transactions/account/' + accountId, data)
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/transactions/search/' + data.from + '/' + data.to)
  }

  makePayment(transaction){
    return this.http.post<any[]>('https://apihonestbank.herokuapp.com/transactions/', transaction)
  }

}


