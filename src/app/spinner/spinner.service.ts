import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SpinnerService {

  constructor() { }
  subscription = new Subject();
  subscription$ = this.subscription.asObservable();
  executeAction(data){
    this.subscription.next(data);
  }
  
}

