import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/switchMap';
import { User } from '../registration/user';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

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
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  login(){
    //this.authService.login(this.model.phone, this.model.password)
    this.authService.login(this.model)
  .subscribe(() => {
     // if (this.authService.isLoggedIn){
       // console.log(this.authService.isLoggedIn)
       
       this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
       if(this.currentUser.userInfo.role == "USER"){
        this.path = 'user'
        //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'user';//2
       } else {
        this.path = 'admin';//2
       }
       this.router.navigate([this.path, {id: this.currentUser.userInfo.userId}]);
        //this.router.navigate([redirect]);
    });
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);//
  }
    
  }
