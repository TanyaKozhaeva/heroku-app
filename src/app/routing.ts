import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    { path: '',
    component: DashComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: '**', redirectTo: '' }
    ]
  },
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
