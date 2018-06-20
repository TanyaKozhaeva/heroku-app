import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { UserService } from '../../services/user.service';
import { AccountsService } from '../../services/accounts.service';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-users-item',
  templateUrl: './users-item.component.html',
  styleUrls: ['./users-item.component.sass'],
  providers: [AccountsService, UserService]
})
export class UsersItemComponent implements OnInit {
@Output() delete = new EventEmitter();
accounts: any[] = [];
userId;
user;
showActions = false;


  constructor(
  private loaderService: LoaderService,
  private accountsService: AccountsService,
  private userService: UserService,
  private route: ActivatedRoute,
  private router: Router) {
    this.userId = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.loaderService.executeAction(true);
  //  this.getUserDetails();
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
}
