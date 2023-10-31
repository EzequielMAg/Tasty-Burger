import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginPageComponent,
    RegisterComponent,
    RegisterPageComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports: [
    /* LoginPageComponent,
    RegisterPageComponent */
  ]
})
export class AuthModule { }
