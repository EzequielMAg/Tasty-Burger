import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error404/error404.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
