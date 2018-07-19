import { Component, OnInit } from '@angular/core';
import { ErrorPopUpService } from './error-pop-up.service';
import {
  trigger,
  state,
  style,
  animate,
  keyframes,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-error-pop-up',
  templateUrl: './error-pop-up.component.html',
  styleUrls: ['./error-pop-up.component.sass'],
  animations: [
    trigger('message', [
      state('in', style({transform: 'translateX(0)'})),
transition('void => *', [
  animate('1s .5s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
    style({transform: 'translateX(-1500px) skewX(30deg) scaleX(1.3)' , offset: 0}),
    style({transform: 'translateX(30px) skewX(0) scaleX(.9)', offset: 0.7}),
    style({transform: 'translateX(0) skewX(0) scaleX(1)', offset: 1.0})
  ]))
]),
transition('* => void', [
  animate('1s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
    style({transform: 'translateX(0) skewX(0) scaleX(1)', offset: 0}),
    style({transform: 'translateX(-30px) skewX(-5deg) scaleX(.9)', offset: 0.3}),
    style({transform: 'translateX(-1500px) skewX(30deg) scaleX(1.3)', offset: 1.0})
  ]))
])
])
  ]
})
export class ErrorPopUpComponent implements OnInit {
message;
  constructor(private errorPopUpService: ErrorPopUpService) { }

  ngOnInit() {
    this.errorPopUpService.getMessage()
    .subscribe(message => {
      this.message = message;
    })
  }

  close(){
    this.message = false;
  }

}
