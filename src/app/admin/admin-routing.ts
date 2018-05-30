import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { AdminDashComponent } from '../admin/admin-dash/admin-dash.component';
import { UsersItemComponent} from '../admin/users-item/users-item.component';
import { CardsComponent } from '../admin/cards/cards.component';
import { TransactionsComponent } from '../admin/transactions/transactions.component';
import { AuthGuard } from '../services/auth-guard.service';


const adminRoutes: Routes = [
    {
        path: 'admin',
        //path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        //canLoad: [AuthGuard],
        children: [
          {
            path: '',
            component: AdminDashComponent,
        },
      { path: 'users-item/:id', component: UsersItemComponent},
      { path: 'cards/:id', component: CardsComponent },
      { path: 'transactions/:id', component: TransactionsComponent }
      ]
    }
  ];

  @NgModule({
    imports: [
     RouterModule.forChild(adminRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AdminRouting {}

//export const AdminRouting = RouterModule.forChild(adminRoutes);
