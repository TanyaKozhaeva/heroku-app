import { HttpModule } from '@angular/http';//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing';
import { AdminModule } from '../app/admin/admin.module';
import { DirectivesModule } from '../app/directives/directives.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { AuthGuard } from './services/auth-guard.service';
import { JwtInterceptor } from './services/jwt.interceptor';
import { TextMaskModule } from 'angular2-text-mask';
//import { PasswordValidationDirective } from './directives/password-validation.directive';

//import { UserInterfaceComponent } from './user-interface/user-interface.component';
//import { AdminComponent } from './admin/admin.component';
//import { UsersComponent } from './admin/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent
    //ErrorsComponent

    //UserInterfaceComponent
    //AdminComponent,
    //UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    UserInterfaceModule,
    TextMaskModule,
    AppRoutingModule
 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
      multi: true
  },
  AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
