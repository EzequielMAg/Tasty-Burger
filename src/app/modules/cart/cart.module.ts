import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideCartComponent } from './components/side-cart/side-cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { ListProductsCartComponent } from './components/list-products-cart/list-products-cart.component';
import { ProductInCartComponent } from './components/product-in-cart/product-in-cart.component';



@NgModule({
  declarations: [
    SideCartComponent,
    ListProductsCartComponent,
    ProductInCartComponent,

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
