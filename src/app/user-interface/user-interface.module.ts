import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserInterfaceComponent } from './user-interface.component';
import { DashComponent } from './dash/dash.component';
import { CardsComponent } from './cards/cards.component';
import { CardItemComponent } from './cards/card-item/card-item.component';
import { AddCardComponent } from './cards/add-card/add-card.component';
import { TransactionsComponent } from './transactions/transactions.component';

import { UserRoutingModule } from './user-routing.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    UserInterfaceComponent,
    DashComponent,
    CardsComponent,
    CardItemComponent,
    AddCardComponent,
    TransactionsComponent
  ]
})
export class UserInterfaceModule { }
