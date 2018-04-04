import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
//import { Http, Headers } from '@angular/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http';

//import 'rxjs/add/operator/map';


@Injectable()
export class AddCardService {
addingCard = new EventEmitter();
  constructor() { }
  
}

