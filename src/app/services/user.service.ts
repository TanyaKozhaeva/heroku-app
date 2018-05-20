import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType, RequestMethod } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor( private http: HttpClient) { }

  create(model){
    return this.http.post('https://apihonestbank.herokuapp.com/registration', model)
   // return this.http.post('https://apihonestbank.herokuapp.com/check', model)
    //.map(res =>
    //  console.log(res))
  };

  deleteUser(userId){
    //return this.http.delete('https://apihonestbank.herokuapp.com/users/'+ userId)
   return this.http.delete('http://jsonplaceholder.typicode.com/users/'+ userId)
  };

  getUsers(){

    return this.http.get('https://apihonestbank.herokuapp.com/users')
    //return this.http.get('http://jsonplaceholder.typicode.com/users', {headers: this.headers})
    //.map(res =>
    // console.log(res))
  }
  getProfiles(){
    return this.http.get('https://apihonestbank.herokuapp.com/admin/users')
    //return this.http.get('http://jsonplaceholder.typicode.com/users', {headers: this.headers})
   // .map(res =>
    /// res.json());
  }
  getUserDetails(userId){
    return this.http.get('https://apihonestbank.herokuapp.com/admin/users/'+ userId)
    //return this.http.get('http://jsonplaceholder.typicode.com/users', {headers: this.headers})
   // .map(res =>
    /// res.json());
  }
  getReport(){
  console.log("start request")
   return this.http.get('https://apihonestbank.herokuapp.com/report')
    //return this.http.get('https://apihonestbank.herokuapp.com/report', { responseType: ResponseContentType.Blob })
    //.map(res =>
      //console.log(res))
        //new Blob([res.blob()], { type: 'application/pdf' }))
  }
}
