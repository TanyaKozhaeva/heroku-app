import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class ConfirmService {

/*
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Are you sure?');

    return Observable.of(confirmation);
  };
  */

/*
 constructor() { }

 subscription = new BehaviorSubject(null);
 subscription$ = this.subscription.asObservable();
 confirm(message){
   console.log(message)
   this.subscription.next(message);
 }*/
 navigateAwaySelection$: Subject<boolean> = new Subject<boolean>();
 /*subscription$ = this.navigateAwaySelection$.asObservable();//
 message(message){//
  this.navigateAwaySelection$.next(message)//
  console.log(message)//
}//
*/
subscription$ = this.navigateAwaySelection$.asObservable();
message(data){
  this.navigateAwaySelection$.next(data);
}
} 