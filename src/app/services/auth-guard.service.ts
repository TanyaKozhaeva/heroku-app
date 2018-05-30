import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, ActivatedRouteSnapshot, RouterStateSnapshot,  CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable ()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLogin();
      }
    canLoad(route: Route): boolean {
      return this.checkLogin();
    }

        checkLogin(){
        if (localStorage.getItem('currentUser')) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
      }
      canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}
