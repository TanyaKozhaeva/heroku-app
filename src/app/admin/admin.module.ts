import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminComponent } from '../admin/admin.component';
import { UsersComponent } from '../admin/users/users.component';
import { CardsComponent } from '../admin/cards/cards.component';


import { AdminRouting } from '../admin/admin-routing';
import { AlertModule } from '../alert/alert.module';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { UsersItemComponent } from './users/users-item/users-item.component';
import { HeaderModule } from '../header/header.module';
//import { AccountItemComponent } from '../user-interface/accounts/account-item/account-item.component';
import { CardItemComponent } from './users/card-item/card-item.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { BackBtnModule } from '../back-btn/back-btn.module';
import { AccountItemComponent } from './users/users-item/account-item/account-item.component';
import { TransactionsModule } from '../transactions/transactions.module';
import { LoaderModule } from '../loader/loader.module';
//import { ErrorsComponent } from '../errors/errors.component';
//import { PhonevalidatorDirective } from '../services/phonevalidator.directive';
//import { EmailvalidatorDirective } from '../services/emailvalidator.directive'


@NgModule({
  imports: [
    CommonModule,
    //ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TransactionsModule,
    LoaderModule,
    AlertModule,
    BackBtnModule,
    HeaderModule,
    AdminRouting
  ],
  declarations: [
    AdminComponent,
    UsersComponent,
    CardsComponent,
    AdminDashComponent,
    UsersItemComponent,
   // AccountItemComponent,
    //ErrorsComponent,
    CardItemComponent,
   TransactionsComponent,
   AccountItemComponent
    //PhonevalidatorDirective
   // EmailvalidatorDirective
  ]
})
export class AdminModule {}
