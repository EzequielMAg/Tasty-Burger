import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    FormsModule,
    SharedModule,
<<<<<<< HEAD
    ReactiveFormsModule
=======
    RouterModule
>>>>>>> Ezequiel
  ],
  exports: [

  ]
})
export class AuthModule { }
