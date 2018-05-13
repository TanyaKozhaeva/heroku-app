import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
//import { ErrorsComponent } from '../errors/errors.component';
//import { PhonevalidatorDirective } from '../services/phonevalidator.directive';
//import { EmailvalidatorDirective } from '../services/emailvalidator.directive'


@NgModule({
  imports: [
    CommonModule,
    //ReactiveFormsModule,
    FormsModule,
    AlertModule,
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
   TransactionsComponent
    //PhonevalidatorDirective
   // EmailvalidatorDirective
  ]
})
export class AdminModule {}
