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
