import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { ModuleWithProviders } from '@angular/core';
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
      //path: '',
      component: UserInterfaceComponent,
      //canActivate: [AuthGuard], 
      //canLoad: [AuthGuard],
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

//export const UserRoutingModule: ModuleWithProviders = RouterModule.forChild(userRoutes)
