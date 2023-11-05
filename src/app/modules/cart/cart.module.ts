import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideCartComponent } from './components/side-cart/side-cart.component';
import { CartRoutingModule } from './cart-routing.module';



@NgModule({
  declarations: [
    SideCartComponent,

  ],
  imports: [
    CommonModule,
    CartRoutingModule,

  ],
  exports: [
    SideCartComponent,

  ]
})
export class CartModule { }
