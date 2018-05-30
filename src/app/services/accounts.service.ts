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

  getAccounts(userId){
     return this.http.get<any[]>('https://apihonestbank.herokuapp.com/accounts/user/' + userId, httpOptions)
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
    return this.http.put('https://apihonestbank.herokuapp.com/accounts/' + account.id, account)
  }
  
  transactionsFilter(data, accountId){
    return this.http.get<any[]>('https://apihonestbank.herokuapp.com/transactions/account/' + accountId, data)
  }

  makePayment(transaction){
    return this.http.post<any[]>('https://apihonestbank.herokuapp.com/transactions/', transaction)
  }

}
