import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import { EmailvalidatorDirective } from '../../../services/emailvalidator.directive'
//import { CardsService } from '../../../services/cards.service';
import { UserService } from '../../../services/user.service';
import { switchMap } from 'rxjs/operators';
import { AlertService } from '../../../alert/alert.service';
import { AccountsService } from '../../../services/accounts.service';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.sass'],
  providers: [AccountsService, UserService]
})
export class UsersItemComponent implements OnInit {
@Input() user;
@Output() delete = new EventEmitter();
accounts: any[]=[];
userId;


  constructor(
  private accountsService: AccountsService,
  private userService: UserService,
  //private cardsService: CardsService,
  private alertService: AlertService,
  private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    /*
    this.user = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
       // this.userService.getHero(params.get('id')))
       this.userId = params.get('id')
    ));*/
    //this.getCards(this.user);
    this.userId = this.route.snapshot.paramMap.get('id');
    //this.getUserDetails();
    this.getAccounts();
  }
  getUserDetails() {
     this.userService.getUserDetails(this.userId)
     .subscribe(res => {
       console.log(res)
       this.user = res;
     });
   }

  private getAccounts() {
    this.accountsService.getAccounts(this.userId)
    .subscribe(res => {
      this.accounts = res;
      console.log(this.accounts)
    });
  }

/*
  private getCards(accountId) {
    this.cardsService.getCards(accountId)
    .subscribe(res => {
      this.cards = res;
    });
  }*/



  deleteAccount(i, id){
    //this.users.splice(i, 1);
    this.accountsService.deleteAccount(id)
    .subscribe(res => {
      this.accounts.splice(i, 1);
      this.alertService.success("Account deleted", true);
    },
    error => {
      this.alertService.error(error);
    });
  }

}
