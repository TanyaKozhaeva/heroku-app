import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from '../admin/admin.component';
//import { UsersComponent } from '../admin/users/users.component';
//import { CardsComponent } from '../admin/cards/cards.component';

import { AdminRouting } from '../admin/admin-routing';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { UsersItemComponent } from './users/users-item/users-item.component';
import { CardItemComponent } from './users/card-item/card-item.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRouting
  ],
  declarations: [
    AdminComponent,
    //UsersComponent,
    //CardsComponent,
    AdminDashComponent,
    UsersItemComponent,
    CardItemComponent
  ]
})
export class AdminModule {}
