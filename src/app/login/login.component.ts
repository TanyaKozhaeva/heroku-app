import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../registration/user';
import { AuthService } from '../services/auth.service';
import { ErrorPopUpService } from '../error-pop-up/error-pop-up.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
mask: any[] = ['+', '3', '8', '0', /[1-9]/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
currentUser;
path;
model = new User();




  constructor(
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private errorPopUpService: ErrorPopUpService
  ) { }

  ngOnInit() {
    this.loaderService.executeAction(false);
  }

  login() {
    this.loaderService.executeAction(true);
    this.authService.login(this.model)
  .subscribe(
    data => {
       this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
       if (this.currentUser.userInfo.role === "USER"){
        this.path = 'user';
       } else {
        this.path = 'admin';
       }
        this.router.navigate([this.path]);
        this.loaderService.executeAction(false);

    },
    error => {
      this.errorPopUpService.error(error);
      this.loaderService.executeAction(false);
    }
    );

  }
}
