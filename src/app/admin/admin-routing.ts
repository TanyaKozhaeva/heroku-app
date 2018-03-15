import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { AdminDashComponent } from '../admin/admin-dash/admin-dash.component';
import { UsersComponent } from '../admin/users/users.component';
import { CardsComponent } from '../admin/cards/cards.component';
import { AuthGuard } from '../services/auth-guard.service';


const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children:[
          {
            path: '',
            canActivateChild: [AuthGuard],
            children: [
              //{ path: '', component: DashComponent, canActivate: [AuthGuard] },
              { path: 'users', component: UsersComponent },
              { path: 'cards', component: CardsComponent },
              { path: '', component: AdminDashComponent }
             // { path: '**', redirectTo: '' }
          ]
        }
      ]
    }
  ]
  @NgModule({
    imports: [
      RouterModule.forChild(adminRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AdminRouting {}
