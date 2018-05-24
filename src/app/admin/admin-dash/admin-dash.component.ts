import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AlertService } from '../../alert/alert.service';
//import { LoaderService } from '../../loader/loader.service';


@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.sass'],
  providers: [UserService]
})
export class AdminDashComponent implements OnInit {
users;


  constructor(
    private userService: UserService,
    private alertService: AlertService ) { }


  ngOnInit() {
    this.getUsers();
  }


 getUsers() {
    this.userService.getProfiles()
    .subscribe(res => {
      this.users = res;
      //this.loaderService.executeAction(false);
    });
  }

  deleteUser(i, id){
    //this.users.splice(i, 1);
    this.userService.deleteUser(id)
    .subscribe(res => {
      this.users.splice(i, 1);
      this.alertService.success('User deleted', true);
    },
    error => {
      this.alertService.error(error);
    });
  }

}
