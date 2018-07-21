import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../alert/alert.service';
import { LoaderService } from '../../loader/loader.service';
import { ErrorPopUpService } from '../../error-pop-up/error-pop-up.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.sass']
})
export class AdminDashComponent implements OnInit {
users;
showSpinner;


  constructor(
    private userService: UserService,
    private loaderService: LoaderService,
    private alertService: AlertService,
    private errorPopUpService: ErrorPopUpService ) { }


  ngOnInit() {
    this.loaderService.executeAction(true);
    this.getUsers();
  }




 getUsers() {
    this.userService.getProfiles()
    .subscribe(res => {
      this.users = res;
      this.loaderService.executeAction(false);
    },
  error => {
    this.errorPopUpService.error(error);
    this.loaderService.executeAction(false);
  });
  }

  deleteUser(i, id) {
    this.alertService.waitingResponse();
    this.userService.deleteUser(id)
    .subscribe(res => {
        this.alertService.success('User ' + '"' + this.users[i].profile.firstName + ' ' + this.users[i].profile.lastName + '"' + ' deleted');
      this.users.splice(i, 1);
    },
    error => {
      this.alertService.error('Something went wrong. Please try again later');
    });
  }
}
