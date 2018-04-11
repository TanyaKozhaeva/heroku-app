import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass']
})
export class AlertComponent implements OnInit {
  message;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage()
    .subscribe(message => {
      console.log(message)
      this.message = message;
    })
  }

}
