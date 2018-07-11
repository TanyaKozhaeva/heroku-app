import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LoaderService } from './loader.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
  // animations: [
  //   trigger('showLoader', [
  //     transition(':enter', [
  //       style({
  //         opacity: 0
  //       }),
  //       animate(".3s ease-in-out", style({
  //         opacity: 1
  //       }))
  //     ]),
  //     transition(':leave', [
  //       style({
  //         opacity: 1
  //       }),
  //       animate(".3s ease-in-out", style({
  //         opacity: 0
  //       }))
  //     ])
  //   ])
  // ]
  animations: [
    trigger('showLoader', [
      state('in', style({transform: 'translateX(0)'})),
  transition('void => *', [
  animate('3s .5s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
    style({transform: 'translateX(-1500px) skewX(30deg) scale(1.3)' , offset: 0}),
    style({transform: 'translateX(30px) skewX(0) scale(.9)', offset: 0.7}),
    style({transform: 'translateX(0) skewX(0) scale(1)', offset: 1.0})
  ]))
  ]),
  transition('* => void', [
    animate('1s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
      style({transform: 'scale(.2) rotate(0deg)', borderRadius: '50%', opacity: 1, offset: 0}),
      style({transform: 'scale(.2) rotate(180deg)', transformOrigin: '80% 20%', opacity: 1, offset: 0.6}),
      style({transform: 'scale(.2) rotate(0deg)', opacity: 1, offset: 0.7}),
      style({transform: 'scale(1)', opacity: 0.6, offset: 1.0})
  ]))
  ])
  ])
  ]
})

export class LoaderComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(){
  this.subscription.unsubscribe();
}

}
