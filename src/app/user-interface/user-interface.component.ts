import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  //selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.sass']
})
export class UserInterfaceComponent implements OnInit {
currentUser;
userId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId)
   // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   // this.userId = this.currentUser.userInfo.userId
  }
  
 // navigationExtras: NavigationExtras = {
  //  queryParams: { 'currentUser': 'this.currentUser'}
  //};

  

}
