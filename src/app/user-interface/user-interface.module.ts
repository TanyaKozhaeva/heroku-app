import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { UserInterfaceComponent } from './user-interface.component';
import { AuthGuard } from '../services/auth-guard.service';
import { JwtInterceptor } from '../services/jwt.interceptor';
import { DashComponent } from './dash/dash.component';
import { HeaderModule } from '../header/header.module';

import { AlertModule } from '../alert/alert.module';
//import { CardsComponent } from './cards/cards.component';
//import { CardItemComponent } from './cards/card-item/card-item.component';
import { AddCardComponent } from './add-card/add-card.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { DirectivesModule } from '../directives/directives.module';
import { TextMaskModule } from 'angular2-text-mask';

import { UserRoutingModule } from './user-routing.module';
import { AddCardService } from '../services/addcard.service';
//import { HeaderComponent } from '../header/header.component';
// import { CanDeactivateGuard } from '../services/can-deactivate-guard.service';
import { ConfirmService } from '../services/confirm.service';
//import { AccountsComponent } from './accounts/accounts.component';
import { AccountItemComponent } from './account-item/account-item.component';
//import { AddAccountComponent } from './accounts/add-account/add-account.component';
//import { AddAccountService } from '../services/addaccount.service';
import { ConfirmWindowModule } from '../confirm-window/confirm-window.module';
import { BackBtnModule } from '../back-btn/back-btn.module';
import { TransactionsModule } from '../transactions/transactions.module';
import { AccountsService } from '../services/accounts.service';
import { CardsService } from '../services/cards.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
   // BsDatepickerModule.forRoot(), // ?????
    //ButtonsModule.forRoot(),
    //MatFormFieldModule,
    //MatInputModule,
 //   MatDatepickerModule,
 //  MatNativeDateModule,
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
    //CardsComponent,
    //CardItemComponent,
    AddCardComponent,
    TransactionsComponent,
    //AccountsComponent,
    AccountItemComponent,
    //AddAccountComponent
  ],
   providers: [
    {
      provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
      multi: true
   },
   AuthGuard,
   // AddCardService,
    //AddAccountService,
    //ConfirmService,
    AccountsService,
    CardsService
   ]
})
export class UserInterfaceModule { }
