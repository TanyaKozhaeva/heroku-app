import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { DashComponent } from './dash/dash.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { JwtInterceptor } from './services/jwt.interceptor';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
   // { path: '', component: DashComponent },  //{ path: '', component: DashComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: false } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ],
    providers: [
     // {
    //  provide: HTTP_INTERCEPTORS,
     // useClass: JwtInterceptor,
    //multi: true
//},
 // AuthGuard,
      AuthService
    ]
  })
  export class AppRoutingModule {}