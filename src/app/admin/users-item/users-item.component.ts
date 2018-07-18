import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../alert/alert.service';
import { AccountsService } from '../../services/accounts.service';
import { LoaderService } from '../../loader/loader.service';
import {
  trigger,
  state,
  style,
  animate,
  keyframes,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.sass'],
  providers: [AccountsService, UserService],
  animations: [
    trigger('rechargeWrap', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(".5s ease-in-out", style({
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
    ])
  ]
})
export class UsersItemComponent implements OnInit {
@Output() delete = new EventEmitter();
accounts: any[] = [];
userId;
user;
showActions = false;
rechargeWrap = false;
rechargeInput = false;
currentAccount;


  constructor(
  private loaderService: LoaderService,
  private accountsService: AccountsService,
  private userService: UserService,
  private alertService: AlertService,
  private route: ActivatedRoute,
  private router: Router) {
    this.userId = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.loaderService.executeAction(true);
    this.getUserDetails();
    this.getAccounts();
  }
  getUserDetails() {
     this.userService.getUserDetails(this.userId)
     .subscribe(res => {
       this.user = res;
     });
   }

  private getAccounts() {
    this.accountsService.getAccounts(this.userId)
    .subscribe(res => {
      this.accounts = res;
      this.loaderService.executeAction(false);
    });
  }

  showingActions() {
    this.showActions ? this.showActions = false : this.showActions = true;
  }

  deleteAccount(i) {
    this.accounts.splice(i, 1);
  }

  showInput(data){
    this.currentAccount = data;
    this.rechargeWrap = true;
  }
  rechargeAccount() {
    this.rechargeWrap = false;
    this.alertService.waitingResponse();
    this.accountsService.rechargeAccount(this.currentAccount)
    .subscribe(res => {
      this.alertService.success('Payment was sent');
      this.getAccounts();
    },
    error => {
      this.alertService.error("Error");
      this.getAccounts();
    }
     );
  }
}
