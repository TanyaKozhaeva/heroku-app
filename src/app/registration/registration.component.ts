import { Component, OnInit } from '@angular/core';
import { User } from "../registration/user";
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass'],
  providers: [ UserService ]
})
export class RegistrationComponent implements OnInit {
model = new User();
//mask: any[] = ['+', '380', '', /[0-9]/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
mask: any[] = ['+', '3', '8', '0', /[1-9]/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]

  constructor( 
    private userService: UserService,
    private router: Router)
   { }

  ngOnInit() {
  }

  register() {
    //console.log(this.model)
    this.userService.create(this.model)
    .subscribe(res => {
    this.router.navigate(['login']); 
      //Catch error
    })
}
}
