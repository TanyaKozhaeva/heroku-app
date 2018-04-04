import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';

@Component({
  //selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.sass']
})
export class UserInterfaceComponent implements OnInit {
currentUser;
  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  navigationExtras: NavigationExtras = {
    queryParams: { 'currentUser': 'this.currentUser'}
  };

  

}
