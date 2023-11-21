import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CounterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CounterComponent,
  ]
})
export class SharedModule { }
