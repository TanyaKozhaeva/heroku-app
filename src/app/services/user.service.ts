import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserService {

  constructor( private http: HttpClient) { }
  getUserDetails(userId) {
    return this.http.get('https://apihonestbank.herokuapp.com/users/' + userId);
  }

  create(model) {
    return this.http.post('https://apihonestbank.herokuapp.com/registration', model);
  }

  deleteUser(userId) {
    return this.http.delete('https://apihonestbank.herokuapp.com/users/' + userId);
  }

  getUsers() {
    return this.http.get('https://apihonestbank.herokuapp.com/users');
  }
  getProfiles() {
    return this.http.get('https://apihonestbank.herokuapp.com/admin/users');

  }

}
