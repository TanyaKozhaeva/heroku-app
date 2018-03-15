import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot,  CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable ()
/*
//2
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            console.log('GUARD true');
            return true;
            
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}*/

/*1
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router){}

    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        let url: string = state.url; //1
        return this.checkLogin(url);
        
      }
      checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) { 
            return true; 
            
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url; //1
    
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
      }
      canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}*/
//3

export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router){}

    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        let url: string = state.url; //1
        return this.checkLogin(url);
        
      }
      checkLogin(url: string): boolean {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            console.log(localStorage);
            return true;
            
        }
        console.log(localStorage);
        console.log('false');
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url; //1
    
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
      }
      canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}

