import { Component, OnInit, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../registration/user';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ErrorPopUpService } from '../error-pop-up/error-pop-up.service';
import { LoaderService } from '../loader/loader.service';
import * as jwt_decode from "jwt-decode";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
@ViewChild('loginForm') public loginForm: NgForm;
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
  if(this.loginForm.valid) {
    this.loaderService.executeAction(true);
    this.authService.login(this.model)
  .subscribe(
    data => {
    let token;
   //this.authService.login(this.model)
   if(this.model.phone == '+38011 111-11-11') {
    token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIrMzgwMTEgMTExLTExLTExIiwidXNlcklkIjoiMiIsInJvbGUiOiJVU0VSIiwiZXhwIjoxNTQwOTg5MzY0fQ.fp8jY1Y_GXR4ChxodjSmKWtOqkxKU5rNWZRNhz2Bm_Q';
   } else if (this.model.phone == '+38099 999-99-99') {
   token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIrMzgwOTkgOTk5LTk5LTk5IiwidXNlcklkIjoiMSIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTU0MTQ1NzA2MH0.O-mKwcYTH4gmARxs5brie4TOnIf0Hzuw1AD196pgQ_U  '}
   else {
   this.errorPopUpService.error('User not found');
   this.loaderService.executeAction(false);
   }
   const userInfo = this.getDecodedAccessToken(token)
        if (token && userInfo) {
              const currentUser = {token, userInfo};
              localStorage.setItem('currentUser', JSON.stringify(currentUser));
          }

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

  getDecodedAccessToken(token): any {
  try{
      return jwt_decode(token);
  } catch (Error){
      return null;
  }
}
}

