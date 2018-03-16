import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
users = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers()
  }


  private getUsers() {
    this.userService.getUsers()
    .subscribe(res => {
      this.users = res.cards;
    });
  }

}
