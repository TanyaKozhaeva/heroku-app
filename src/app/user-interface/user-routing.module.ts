import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UserInterfaceComponent } from './user-interface.component';
import { CardsComponent } from './cards/cards.component';
import { CardItemComponent } from './cards/card-item/card-item.component';
import { AddCardComponent } from './cards/add-card/add-card.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DashComponent } from './dash/dash.component';


/*const userRoutes: Routes = [
  {
    path: 'user',
    component: UserInterfaceComponent,
    children: [
      { path: 'cards', component: CardsComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'add-card', component: AddCardComponent }
      //{ path: '', component: UserInterfaceComponent }
    ]
  }
]*/

const userRoutes: Routes = [

      { path: 'cards', component: CardsComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'add-card', component: AddCardComponent },
      { path: 'user', component: UserInterfaceComponent }
];

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
