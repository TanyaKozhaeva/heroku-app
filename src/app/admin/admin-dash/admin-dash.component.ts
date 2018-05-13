import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../alert/alert.service';


@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.sass'],
  providers: [UserService]
})
export class AdminDashComponent implements OnInit, OnChanges {
users;


  constructor(
    private userService: UserService,
    private alertService: AlertService) { }


  ngOnInit() {
    this.getUsers();//не работает  on Changes
  }
  ngOnChanges() {
    this.getUsers();
  }


 getUsers() {
    this.userService.getProfiles()
    .subscribe(res => {
      console.log(res)
      this.users = res;
    });
  }

  deleteUser(i, id){
    //this.users.splice(i, 1);
    this.userService.deleteUser(id)
    .subscribe(res => {
      this.users.splice(i, 1);
      this.alertService.success("User deleted", true);
    },
    error => {
      this.alertService.error(error);
    });
  }

}
