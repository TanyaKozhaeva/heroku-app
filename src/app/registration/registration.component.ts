import { Component, OnInit } from '@angular/core';
import { User } from '../registration/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
model = new User();
mask: any[] = ['+', '3', '8', '0', /[1-9]/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]

  constructor(
    private loaderService: LoaderService,
    private userService: UserService,
    private router: Router,
    private alertService: AlertService)
   { }

  ngOnInit() {
  }

  register() {
    this.loaderService.executeAction(true);
    this.userService.create(this.model)
    .subscribe(res => {
    this.router.navigate(['/']); 
    },
    error => {
      this.loaderService.executeAction(false);
      this.alertService.error(error);
    })
}
}
