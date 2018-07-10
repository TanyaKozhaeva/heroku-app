import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import {
  trigger,
  state,
  style,
  animate,
  keyframes,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass'],
  // animations: [
  //   trigger('message', [
  //     transition(':enter', [
  //       style({
  //         opacity: 0,
  //         transform: 'translateY(-1000px)'
  //       }),
  //       animate(".8s ease-in-out", style({
  //         opacity: 1,
  //         transform: 'translateY(-50%)'
  //       }))
  //     ]),
  //     transition(':leave', [
  //       style({
  //         opacity: 1,
  //         transform: 'translateY(-50%)'
  //       }),
  //       animate(".6s ease-in-out", style({
  //         opacity: 0,
  //         transform: 'translateY(-1000px)'
  //       }))
  //     ])
  //   ])
  // ]
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
export class AlertComponent implements OnInit {
  message;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage()
    .subscribe(message => {
      this.message = message;
    })

  }

  close(){
    this.message = false;
  }

}
