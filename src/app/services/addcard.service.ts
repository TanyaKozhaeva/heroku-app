import { Injectable } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { Http, Headers } from '@angular/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http';

//import 'rxjs/add/operator/map';


@Injectable()
export class AddCardService {
  
//addingCard = new EventEmitter();
  constructor() { }
  //subscription = new Subject();
  subscription = new BehaviorSubject(null);
  subscription$ = this.subscription.asObservable();
  executeAction(data){
    this.subscription.next(data);
    console.log(data)
  }
  
}

