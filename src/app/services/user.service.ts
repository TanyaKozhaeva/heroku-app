import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': "Token eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIrMzgwOTkgOTk5LTk5LTk5IiwidXNlcklkIjoiMSIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTUzMDUzNTA2MH0.d4tA4Qfn8IGwT5zsRJgYdPrNp2H9OWJGuchzdcAAjfI"
  })
  };
@Injectable()
export class UserService {
  constructor( private http: HttpClient) { }
  getUserDetails(userId) {
    console.log(httpOptions)
    return this.http.get('https://apihonestbank.herokuapp.com/users/' + userId, httpOptions);
  }

  create(model) {
    return this.http.post('https://apihonestbank.herokuapp.com/registration', model);
  }

  deleteUser(userId) {
    return this.http.delete('https://apihonestbank.herokuapp.com/users/' + userId);
  }

  getUsers() {
    return this.http.get('https://apihonestbank.herokuapp.com/users', httpOptions);
  }
  getProfiles() {
    return this.http.get('https://apihonestbank.herokuapp.com/admin/users', httpOptions);

  }

}
