import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map'
import * as moment from "moment";

@Injectable ()
export class AuthService{
    constructor(private http: HttpClient){}
   //isLoggedIn = false;
   redirectUrl: string;//2

/*1
  login(phone: string, password: string): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }*/
  /*2
  login(phone: string, password: string){
    //return this.http.post<any>('/api/authenticate', { phone: phone, password: password })
    return this.http.post('http://jsonplaceholder.typicode.com/users', { phone: phone, password: password })
    .do(res => this.setSession)
  }

  private setSession(authResult){
    const expiresAt = moment().add(authResult.expiresIn, 'second');//время истечения сессии
    localStorage.setItem('id_token', authResult.idToken);//id сессии харним в LC под именем id_token
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) ); //время исетчния сесси храним в хранилище под именем expires_at

  }

  logout() {
    localStorage.removeItem("id_token"); //прекращаем сессию пр выходе
    localStorage.removeItem("expires_at");
    //return !this.isLoggedIn()
}
/*
public isLoggedIn() {
  console.log(this.getExpiration())
  return moment().isBefore(this.getExpiration()); //возвращает срок/true  истечения токена, если пользователь зашел в систему. Нужно для управления клиентским контентом
}

isLoggedOut() {
  return !this.isLoggedIn();
}


getExpiration() {
  const expiration = localStorage.getItem("expires_at");
  const expiresAt = JSON.parse(expiration);
  return moment(expiresAt);
}  
*/ 
login(username: string, password: string) {
  return this.http.post('http://jsonplaceholder.typicode.com/users', { username: username, password: password })
      .map(user => {
        console.log(user);
          // login successful if there's a jwt token in the response
          //if (user && user.token) {
            if (user) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              console.log(localStorage)
          }
          return user;
          
      });
}

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  console.log(localStorage)
}

}