import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass'],
  animations: [
    trigger('message', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-1000px)'
        }),
        animate(".8s ease-in-out", style({
          opacity: 1,
          transform: 'translateY(-50%)'
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1,
          transform: 'translateY(-50%)'
        }),
        animate(".6s ease-in-out", style({
          opacity: 0,
          transform: 'translateY(-1000px)'
        }))
      ])
    ])
  ]
//   animations: [
//     trigger('message', [
//      state('false', style({transform: 'translateX(0) scale(1)'})),
//      state('true',   style({transform: 'translateX(0) scale(1.1)'})),
//      transition('false => true', animate('100ms ease-in')),
//      transition('true => false', animate('100ms ease-out')),
//      transition('void => false', [
//        style({transform: 'translateX(-100%) scale(1)'}),
//        animate(100)
//      ]),
//      transition('false => void', [
//        animate(100, style({transform: 'translateX(100%) scale(1)'}))
//      ]),
//      transition('void => true', [
//        style({transform: 'translateX(0) scale(0)'}),
//        animate(200)
//      ]),
//      transition('true => void', [
//        animate(200, style({transform: 'translateX(0) scale(0)'}))
//      ])
//    ])
// ]
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
