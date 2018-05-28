import { Component, OnInit } from '@angular/core';
import { User } from '../registration/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass'],
  providers: [ UserService ]
})
export class RegistrationComponent implements OnInit {
model = new User();
mask: any[] = ['+', '3', '8', '0', /[1-9]/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService)
   { }

  ngOnInit() {
  }

  register() {
    this.userService.create(this.model)
    .subscribe(res => {
    this.router.navigate(['/']); 
    },
    error => {
      this.alertService.error('Something went wrong. Please try again later');
    })
}
}
