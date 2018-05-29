import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class ConfirmService {

 navigateAwaySelection$: Subject<boolean> = new Subject<boolean>();
subscription$ = this.navigateAwaySelection$.asObservable();
message(data) {
  this.navigateAwaySelection$.next(data);
}
}
