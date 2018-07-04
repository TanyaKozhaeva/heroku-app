import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import * as svg4everybody from 'svg4everybody/dist/svg4everybody';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  constructor() { }

  ngOnInit(){
      svg4everybody();
  }
}
