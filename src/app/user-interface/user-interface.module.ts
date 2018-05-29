import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderModule } from '../header/header.module';
import { AlertModule } from '../alert/alert.module';
import { UserRoutingModule } from './user-routing.module';
import { DirectivesModule } from '../directives/directives.module';
import { TextMaskModule } from 'angular2-text-mask';
import { ConfirmWindowModule } from '../confirm-window/confirm-window.module';
import { BackBtnModule } from '../back-btn/back-btn.module';
import { TransactionsModule } from '../transactions/transactions.module';


import { UserInterfaceComponent } from './user-interface.component';
import { DashComponent } from './dash/dash.component';
import { AddCardComponent } from './add-card/add-card.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountItemComponent } from './account-item/account-item.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    TransactionsModule,
    ConfirmWindowModule,
    AlertModule,
    BackBtnModule,
    DirectivesModule,
    TextMaskModule,
    UserRoutingModule
  ],
  declarations: [
    UserInterfaceComponent,
    DashComponent,
    AddCardComponent,
    TransactionsComponent,
    AccountItemComponent,
  ]
})
export class UserInterfaceModule { }
