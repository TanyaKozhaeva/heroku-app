import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs/Subject';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class AlertService {
  private subscription = new Subject<any>();
  subscription$ = this.subscription.asObservable();
  private keepAfterNavigationChange = false;


  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart){
        if (this.keepAfterNavigationChange){
          this.keepAfterNavigationChange = false;
        } else {
          this.subscription.next();
        }
      }
    });
  }

  success(message: string, keepAfterNavigationChange = false){
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subscription.next({type: 'success', text: message})
  }

  error(message: string, keepAfterNavigationChange = false){
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subscription.next({type: 'error', text: message})
  }

  waitingResponse(){
    this.subscription.next({type: 'waitingResponse'})
  }

  getMessage(){
    return this.subscription$;
  }
}
