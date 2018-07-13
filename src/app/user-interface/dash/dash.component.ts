import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { LoaderService } from '../../loader/loader.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  stagger,
  query
} from '@angular/animations';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.sass'],
  animations: [
    trigger('showBtn', [
      transition(':enter', [
        style({
          transform: 'scaleX(0)'
        }),
        animate(".5s 1s ease-in-out", style({
          opacity: 1,
          transform: 'scaleX(1)'
        }))
      ]),
      transition(':leave', [
        style({
          transform: 'scaleX(1)'
        }),
        animate(".5s ease-in-out", style({
          transform: 'scaleX(0)'
        }))
      ])
    ]),
    trigger('showAccounts', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({opacity: 0, transform: 'translateX(-1000px)'}))
          ])
        ], {optional: true}),
        query(':enter', [
          style({opacity: 0, transform: 'translateX(-1000px)'}),
          stagger(100, [
            animate('0.5s ease-in-out', style({
              opacity: 1,
             transform: 'translateX(0)'
            }))
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class DashComponent implements OnInit {
products: any[]=[];
accounts: any[]=[];
showBtn = false;
showAccounts = false;
currentUser;
userId;


  constructor(
    private loaderService: LoaderService,
    private accountsService: AccountsService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
 this.userId = this.currentUser.userInfo.userId;
  }

  ngOnInit() {
    this.loaderService.executeAction(true);
    this.getProducts();
this.getAccounts();

  }

  private getProducts() {
    this.accountsService.getProducts()
    .subscribe(res => {
      for(var i=0; i<res.length; i++){
        if(res[i].currency=="UAH") {
          continue;
        } else{
          this.products.push(res[i])
        }
      }
    });
  }
  private getAccounts() {
    this.accountsService.getAccounts(this.userId)
    .subscribe(res => {
      this.accounts = res;
      this.loaderService.executeAction(false);
      this.showAccounts = true;
      this.showBtn = true;
    });
  }

}
