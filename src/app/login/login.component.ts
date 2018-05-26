import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/switchMap';
import { User } from '../registration/user';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../alert/alert.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  //selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [
    UserService,
    AuthService
   ]
})
export class LoginComponent implements OnInit {
mask: any[] = ['+', '3', '8', '0', /[1-9]/, /\d/, ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]

currentUser;
path;
model = new User();




  constructor(
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  login(){
    console.log("login")
    this.loaderService.executeAction(true);
    this.authService.login(this.model)
  .subscribe(

    data => {
       this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
       if(this.currentUser.userInfo.role == "USER"){
        this.path = 'user'
        //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'user';//2
       } else {
        this.path = 'admin';//2
       }
       //this.router.navigate([this.path, {id: this.currentUser.userInfo.userId}]);
        //this.router.navigate([redirect]);
        this.router.navigate([this.path]);
        this.loaderService.executeAction(false);

    },
    error => {
      this.alertService.error(error);
      console.log(error)
      this.loaderService.executeAction(false);
    }
    );

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);//
  }

  }
