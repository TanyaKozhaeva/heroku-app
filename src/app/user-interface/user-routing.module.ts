import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { UserInterfaceComponent } from './user-interface.component';
import { CardsComponent } from './cards/cards.component';
import { CardItemComponent } from './cards/card-item/card-item.component';
import { AddCardComponent } from './cards/add-card/add-card.component';
import { TransactionsComponent } from './transactions/transactions.component';
//import { DashComponent } from './dash/dash.component';
import { AuthGuard } from '../services/auth-guard.service';
import { JwtInterceptor } from '../services/jwt.interceptor';
import { CanDeactivateGuard } from '../services/can-deactivate-guard.service';
import { AddAccountComponent } from './accounts/add-account/add-account.component';

const userRoutes: Routes = [
  {
      path: 'user',
      component: UserInterfaceComponent,
      canActivate: [AuthGuard],
      children:[
       // {
         // path: '',
         // component: CardsComponent
        
         // canActivateChild: [AuthGuard],
          ///children: [
            /*{ path: 'cards', 
              component: CardsComponent,
              children: [
                { path: 'add-card', 
                  component: AddCardComponent }
              ]},*/
            //{ path: 'cards', component: CardsComponent},
            //{ path: 'transactions', component: TransactionsComponent },
            
           // { path: '', component: CardsComponent }
        //]
     // },
      { path: '', 
      component: CardsComponent,
      children: [
        { path: 'add-card', 
        component: AddCardComponent,
        canDeactivate: [CanDeactivateGuard] },
        { path: 'add-account', 
        component: AddAccountComponent,
        canDeactivate: [CanDeactivateGuard] }
      ]},
      { path: 'transactions', component: TransactionsComponent }
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
  ],
  providers: [
    CanDeactivateGuard
  ]
//  providers: [
//    {
//      provide: HTTP_INTERCEPTORS,
 //   useClass: JwtInterceptor,
//      multi: true
 // },
 // AuthGuard
//  ],
})
export class UserRoutingModule { }
