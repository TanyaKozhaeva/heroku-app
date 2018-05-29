import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserInterfaceComponent } from './user-interface.component';
import { AddCardComponent } from './add-card/add-card.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DashComponent } from './dash/dash.component';
import { AccountItemComponent } from './account-item/account-item.component';

import { AuthGuard } from '../services/auth-guard.service';
import { CanDeactivateGuard } from '../services/can-deactivate-guard.service';

const userRoutes: Routes = [
  {
      path: 'user',
      component: UserInterfaceComponent,
      canActivate: [AuthGuard],
      children: [
     { path: '', component: DashComponent },
      { path: 'add-card',
        component: AddCardComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'account-item/:id', component: AccountItemComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard
  ]
})
export class UserRoutingModule { }
