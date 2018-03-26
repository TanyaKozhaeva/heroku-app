import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.sass'],
  providers: [UserService]
})
export class AdminDashComponent implements OnInit, OnChanges {
users = [];


  constructor(private userService: UserService) { }


  ngOnInit() {
    this.getUsers();//не работает  on Changes
  }
  ngOnChanges() {
    this.getUsers();
  }


 getUsers() {
    this.userService.getUsers()
    .subscribe(res => {
      console.log(res)
      this.users = res;
    });
  }

  deleteUser(id){
    this.users.splice(id, 1);
  }
}
