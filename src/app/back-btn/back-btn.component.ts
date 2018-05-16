import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.sass']
})
export class BackBtnComponent implements OnInit {
 

  constructor(
    private location: Location
  ) {
   }

  ngOnInit() {
    
  }

  cansel(){
    this.location.back()
  }

}
