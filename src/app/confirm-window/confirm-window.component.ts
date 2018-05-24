import { Component, OnInit } from '@angular/core';
import { ConfirmService } from '../services/confirm.service';
import { Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-confirm-window',
  templateUrl: './confirm-window.component.html',
  styleUrls: ['./confirm-window.component.sass'],
  animations: [
    trigger('showWindow', [
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
export class ConfirmWindowComponent implements OnInit {
  subscription: Subscription;
  message;
  showWindow = false;

  constructor(
    private confirmService: ConfirmService
  ) { 
    
    this.subscription = confirmService.subscription$.subscribe(
      data => {
        this.message = data;
        this.showWindow = true;
      }
    )
  }

  ngOnInit() {
  }
  choose(choice: boolean): void {
    this.confirmService.navigateAwaySelection$.next(choice);
    this.showWindow = false;
  }

}
