import { Injectable } from '@angular/core';
import { Http, Headers, ResponseContentType, RequestMethod } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor( private http: HttpClient) { }

  create(model){
    console.log(model)
    //return this.http.post('https://apihonestbank.herokuapp.com/users', model)
    return this.http.post('https://apihonestbank.herokuapp.com/check', model)
    //.map(res =>
      //console.log(res))
     //res.json());
  };

  deleteUser(userId){
    return this.http.delete('https://apihonestbank.herokuapp.com/users/'+ userId)
    //.map(res =>
      //res.json());
  };

  getUsers(){
  
    return this.http.get('https://apihonestbank.herokuapp.com/users')
    //return this.http.get('http://jsonplaceholder.typicode.com/users', {headers: this.headers})
    //.map(res =>
    // console.log(res))
  }
  getFullUsersInfo(){
    return this.http.get('https://apihonestbank.herokuapp.com/profiles')
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
  
