import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DashComponent } from './dash/dash.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
   // { path: '', component: DashComponent },  //{ path: '', component: DashComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    //{ path: '', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: '**', redirectTo: '' }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ],
    providers: [
      AuthGuard,
      AuthService
    ]
  })
  export class AppRoutingModule {}