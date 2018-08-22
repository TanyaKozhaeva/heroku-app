import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives/directives.module';
import { AlertModule } from '../alert/alert.module';
import { ErrorPopUpModule } from '../error-pop-up/error-pop-up.module';
import { HeaderModule } from '../header/header.module';
import { BackBtnModule } from '../back-btn/back-btn.module';
import { TransactionsModule } from '../transactions/transactions.module';
import { LoaderModule } from '../loader/loader.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { AdminRouting } from '../admin/admin-routing';

import { AdminComponent } from '../admin/admin.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { UsersItemComponent } from './users-item/users-item.component';
import { AccountItemComponent } from './users-item/account-item/account-item.component';
import { CardsComponent } from '../admin/cards/cards.component';
import { CardItemComponent } from './cards/card-item/card-item.component';
import { TransactionsComponent } from './transactions/transactions.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TransactionsModule,
    LoaderModule,
    DirectivesModule,
    AlertModule,
    ErrorPopUpModule,
    BackBtnModule,
    SpinnerModule,
    HeaderModule,
    AdminRouting
  ],
  declarations: [
    AdminComponent,
    CardsComponent,
    AdminDashComponent,
    UsersItemComponent,
    CardItemComponent,
    TransactionsComponent,
    AccountItemComponent
  ]
})
export class AdminModule {}
