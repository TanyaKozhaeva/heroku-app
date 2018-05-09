import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { AdminDashComponent } from '../admin/admin-dash/admin-dash.component';
import { UsersComponent } from '../admin/users/users.component';
import { UsersItemComponent} from '../admin/users/users-item/users-item.component';
import { CardsComponent } from '../admin/cards/cards.component';
import { TransactionsComponent } from '../admin/transactions/transactions.component';
import { AuthGuard } from '../services/auth-guard.service';


const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children:[
          {
            path: '',
            component: AdminDashComponent,
            //canActivateChild: [AuthGuard],
            //children: [
              //{ path: '', component: AdminDashComponent },
              //{ path: 'users', component: UsersComponent },
              //{ path: 'cards', component: CardsComponent },
              //{ path: '', component: UsersComponent }
             // { path: '**', redirectTo: '' }
          //]
        },
        { path: 'users-item/:id',
        component: UsersItemComponent,
        children: [
          { path: 'cards/:id', component: CardsComponent },
          { path: 'transactions/:id', component: TransactionsComponent }

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
