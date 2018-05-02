import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class ConfirmService {


  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Are you sure?');

    return Observable.of(confirmation);
  };

/*
 constructor() { }

 subscription = new BehaviorSubject(null);
 subscription$ = this.subscription.asObservable();
 confirm(message){
   console.log(message)
   this.subscription.next(message);
 }*/
} 