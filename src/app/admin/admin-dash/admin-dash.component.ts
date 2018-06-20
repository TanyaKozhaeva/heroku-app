import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../alert/alert.service';
import { LoaderService } from '../../loader/loader.service';
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
    private alertService: AlertService ) { }


  ngOnInit() {
    this.loaderService.executeAction(true);
    this.getUsers();
  }




 getUsers() {
    this.userService.getProfiles()
    .subscribe(res => {
      this.users = res;
      this.loaderService.executeAction(false);
    });
  }

  deleteUser(i, id) {
    //this.showSpinner = true;
    this.userService.deleteUser(id)
    .subscribe(res => {
      //this.showSpinner = false;
      this.users.splice(i, 1);
      this.alertService.success('User deleted');
    },
    error => {
      //this.showSpinner = false;
      this.alertService.error('Something went wrong. Please try again later');
    });
  }
}
