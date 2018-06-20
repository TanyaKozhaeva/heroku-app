import { NgModule } from '@angular/core';
//import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';


const appRoutes: Routes = [
    { path: '',
    component: DashComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: '**', redirectTo: '' },
      //{ path: 'admin', loadChildren: '../admin/admin.module#AdminModule'}
      //{ path: 'user', loadChildren: 'app/user-interface/user-interface.module#UserInterfaceModule', canActivate: [AuthGuard]}

    ],
  },
  //{ path: 'admin', loadChildren: '././app/admin/admin.module#AdminModule'}
  { path: 'admin', loadChildren: 'admin.module.chunk.js'}
];
  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: false }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}

/*export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  appRoutes)
  */
