import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class ErrorPopUpService {
  private subscription = new Subject<any>();
  subscription$ = this.subscription.asObservable();
  private keepAfterNavigationChange = false;


  error(message: string){
    this.subscription.next({type: 'error', text: message})
  }

  getMessage(){
    return this.subscription$;
  }
}
