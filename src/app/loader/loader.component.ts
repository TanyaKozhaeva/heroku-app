import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from './loader.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
  animations: [
    trigger('showLoader', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(".3s ease-in-out", style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate(".3s ease-in-out", style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit {
  showLoader;
  subscription: Subscription;
  constructor(private loaderService: LoaderService){ 
    this.subscription = loaderService.subscription$.subscribe(
      data => {
        this.showLoader = data;
      }
    )
  }

  ngOnInit() {
  }

}
