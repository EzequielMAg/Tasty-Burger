import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeroComponent } from './components/hero/hero.component';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    Error404Component,
    HomePageComponent,
    HeroComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    Error404Component,
    HomePageComponent,
    CounterComponent,
  ]
})
export class SharedModule { }
