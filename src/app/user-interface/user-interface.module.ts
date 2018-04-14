import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserInterfaceComponent } from './user-interface.component';
import { AuthGuard } from '../services/auth-guard.service';
import { JwtInterceptor } from '../services/jwt.interceptor';
//import { DashComponent } from './dash/dash.component';
import { HeaderModule } from '../header/header.module';
import { AlertModule } from '../alert/alert.module';
import { CardsComponent } from './cards/cards.component';
import { CardItemComponent } from './cards/card-item/card-item.component';
import { AddCardComponent } from './cards/add-card/add-card.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DirectivesModule } from '../directives/directives.module';
import { TextMaskModule } from 'angular2-text-mask';


import { UserRoutingModule } from './user-routing.module'
import { AddCardService } from '../services/addcard.service';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    AlertModule,
    DirectivesModule,
    TextMaskModule,
    UserRoutingModule
  ],
  declarations: [
    UserInterfaceComponent,
    CardsComponent,
    CardItemComponent,
    AddCardComponent,
    TransactionsComponent
  ],
  providers: [
    AddCardService
  ]
  //providers: [
  //  {
  //    provide: HTTP_INTERCEPTORS,
  //  useClass: JwtInterceptor,
  //    multi: true
  //},
  //AuthGuard
  //],
})
export class UserInterfaceModule { }
