import { Component, OnInit } from '@angular/core';
import { ConfirmService } from '../services/confirm.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-confirm-window',
  templateUrl: './confirm-window.component.html',
  styleUrls: ['./confirm-window.component.sass']
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
