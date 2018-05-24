import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
//import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {
  showLoader;
  subscription: Subscription;
  constructor() { /*
    this.subscription = loaderService.subscription$.subscribe(
      data => {
        this.showLoader = data;
      }
    )*/
  }

  ngOnInit() {
  }

}
