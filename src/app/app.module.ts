import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from '../app/admin/admin.module';
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { LoaderModule } from './loader/loader.module';
import { DirectivesModule } from '../app/directives/directives.module';
import { AlertModule } from './alert/alert.module';
import { TextMaskModule } from 'angular2-text-mask';
import { HeaderModule } from './header/header.module';
import { ConfirmWindowModule } from './confirm-window/confirm-window.module';
import { SpinnerModule } from './spinner/spinner.module';
import { AppRoutingModule } from './routing';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './services/auth-guard.service';
import { JwtInterceptor } from './services/jwt.interceptor';
import { HttpErrorInterceptor } from './services/http-error.interceptor';
import { AuthService } from './services/auth.service';
import { AccountsService } from './services/accounts.service';
import { CardsService } from './services/cards.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DirectivesModule,
    FormsModule,
    BrowserAnimationsModule,
    LoaderModule,
    SpinnerModule,
    HeaderModule,
    ConfirmWindowModule,
    AlertModule,
    AdminModule,
    UserInterfaceModule,
    TextMaskModule,
    AppRoutingModule

  ],
  providers: [
  /*{
      provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
      multi: true
  },*/
 {
    provide: HTTP_INTERCEPTORS,
  useClass: HttpErrorInterceptor,
    multi: true
},
UserService,
  AuthGuard,
  AuthService,
    AccountsService,
    CardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
