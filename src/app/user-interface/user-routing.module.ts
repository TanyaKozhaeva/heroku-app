import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { UserInterfaceComponent } from './user-interface.component';
import { CardsComponent } from './cards/cards.component';
import { CardItemComponent } from './cards/card-item/card-item.component';
import { AddCardComponent } from './cards/add-card/add-card.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DashComponent } from './dash/dash.component';
import { AuthGuard } from '../services/auth-guard.service';

const userRoutes: Routes = [
  {
      path: 'user',
      component: UserInterfaceComponent,
      canActivate: [AuthGuard],
      children:[
        {
          path: '',
         // canActivateChild: [AuthGuard],
          children: [
            { path: 'cards', component: CardsComponent },
            { path: 'transactions', component: TransactionsComponent },
            //{ path: 'add-card', component: AddCardComponent },
            { path: '', component: CardsComponent }
        ]
      }
    ]
  }
]
/*
const userRoutes: Routes = [

      { path: 'cards', component: CardsComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'add-card', component: AddCardComponent },
      { path: 'user', component: UserInterfaceComponent }
];
*/

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
