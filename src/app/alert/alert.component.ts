import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import {
  trigger,
  state,
  style,
  animate,
  keyframes,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.sass'],
  animations: [
    trigger('showWrapper', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(".8s 3s ease-in-out", style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate(".5s ease-in-out", style({
          opacity: 0
        }))
      ])
    ]),
    trigger('showMarker', [
      state('in', style({transform: 'translateX(-1500px)'})),
transition('void => *', [
  animate('2s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
    style({transform: 'translateX(-1500px) skewX(30deg) scaleX(1.3)' , offset: 0}),
    style({transform: 'translateX(30px) skewX(0) scaleX(.9)', offset: 0.7}),
    style({transform: 'translateX(0) skewX(0) scaleX(1)', offset: 1.0})
  ]))
]),
transition('* => void', [
  animate('1s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
    style({transform: 'translateX(0) skewX(0) scaleX(1)', offset: 0}),
    style({transform: 'translateX(-30px) skewX(-5deg) scaleX(.9)', offset: 0.3}),
    style({transform: 'translateX(-1500px) skewX(30deg) scaleX(1.3)', offset: 1.0})
  ]))
])
]),
trigger('showIcon', [
  state('in', style({transform: 'translateX(-1500px)'})),
transition('void => *', [
animate('2s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
style({transform: 'translateX(-1500px) skewX(30deg) scaleX(1.3)' , offset: 0}),
style({transform: 'translateX(30px) skewX(0) scaleX(.9)', offset: 0.7}),
style({transform: 'translateX(0) skewX(0) scaleX(1)', offset: 1.0})
]))
]),
transition('* => void', [
animate('1s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
style({transform: 'translateX(0) skewX(0) scaleX(1)', offset: 0}),
style({transform: 'translateX(-30px) skewX(-5deg) scaleX(.9)', offset: 0.3}),
style({transform: 'translateX(-1500px) skewX(30deg) scaleX(1.3)', offset: 1.0})
]))
])
]),
trigger('showMessage', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-1000px)'
      }),
      animate("1s ease-in-out", style({
        opacity: 1,
        transform: 'translateY(0)'
      }))
    ]),
    transition(':leave', [
      style({
        opacity: 1,
        transform: 'translateY(0)'
      }),
      animate("1s ease-in-out", style({
        opacity: 0,
        transform: 'translateY(-1000px)'
      }))
    ])
  ])
    // trigger('showMarker', [
    //   transition(':enter', [
    //     style({
    //       opacity: 0,
    //       transform: 'scale(5)'
    //     }),
    //     animate("5s 2s ease-in-out", style({
    //       opacity: 0,
    //       background: 'red',
    //       transform: 'scale(1)'
    //     }))
    //   ]),
    //   transition(':leave', [
    //     style({
    //       opacity: 1
    //     }),
    //     animate(".5s ease-in-out", style({
    //       opacity: 0
    //     }))
    //   ])
    // ])
  ]
  // animations: [
  //   trigger('message', [
  //     transition(':enter', [
  //       style({
  //         opacity: 0,
  //         transform: 'translateY(-1000px)'
  //       }),
  //       animate(".8s ease-in-out", style({
  //         opacity: 1,
  //         transform: 'translateY(-50%)'
  //       }))
  //     ]),
  //     transition(':leave', [
  //       style({
  //         opacity: 1,
  //         transform: 'translateY(-50%)'
  //       }),
  //       animate(".6s ease-in-out", style({
  //         opacity: 0,
  //         transform: 'translateY(-1000px)'
  //       }))
  //     ])
  //   ])
  // ]
//   animations: [
//     trigger('message', [
//       state('in', style({transform: 'translateX(0)'})),
// transition('void => *', [
//   animate('1s .5s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
//     style({transform: 'translateX(-1500px) skewX(30deg) scaleX(1.3)' , offset: 0}),
//     style({transform: 'translateX(30px) skewX(0) scaleX(.9)', offset: 0.7}),
//     style({transform: 'translateX(0) skewX(0) scaleX(1)', offset: 1.0})
//   ]))
// ]),
// transition('* => void', [
//   animate('1s cubic-bezier(0.165, 0.840, 0.440, 1.000)', keyframes([
//     style({transform: 'translateX(0) skewX(0) scaleX(1)', offset: 0}),
//     style({transform: 'translateX(-30px) skewX(-5deg) scaleX(.9)', offset: 0.3}),
//     style({transform: 'translateX(-1500px) skewX(30deg) scaleX(1.3)', offset: 1.0})
//   ]))
// ])
// ])
//   ]
 })
export class AlertComponent implements OnInit {
  message;
  showWrapper = false;
  showMarker = false;
  showIcon = false;
  showMessage = false;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage()
    .subscribe(message => {
      if(message.type == "waitingResponse"){
        this.showWrapper = true;
        this.showMarker = true;
        this.showIcon = true;
      }
      this.message = message;
      this.showMessage = true;
    })

  }

  close(){
    this.message = false;
  }

}
