import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map'
import * as moment from "moment";
import * as jwt_decode from "jwt-decode";

//const httpOptions = {
  //headers: new HttpHeaders({
   // 'Content-Type':  'application/json'
  //})
//};
@Injectable ()
export class AuthService{
  private headers = new Headers({'Content-Type': 'application/json'});
  
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
//{ phone: phone, password: password }
login(model) {
const headers = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
};
  return this.http.post('https://apihonestbank.herokuapp.com/login', {phone: model.phone, password: model.password}, {responseType: 'text'})
      .map(token => {
        
       //const tokenInfo = this.getDecodedAccessToken("eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwidXNlcklkIjoiMiIsInJvbGUiOiJST0xFX1VTRVIifQ.AFpNDWx6lA11Ril5B9fS17YXOmBZIvAYQ0MvnpyJ_gq222hlG3xxY39svsLumAj1SbC6eobjGp5626ICsEpMaA")
        const userInfo = this.getDecodedAccessToken(token)
          // login successful if there's a jwt token in the response
          //if (user && user.token) {
            if (token && userInfo) {
              let currentUser = {token, userInfo}
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(currentUser));
              console.log(localStorage)

          }
          return token;
          
      })
    }

getDecodedAccessToken(token): any {
  try{
      return jwt_decode(token);
  }
  catch(Error){
    console.log(Error)
      return null;
  }
}

logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('currentUser');
  console.log(localStorage)
}

}