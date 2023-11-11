import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideCartComponent } from './components/side-cart/side-cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { ListProductsCartComponent } from './components/list-products-cart/list-products-cart.component';
import { ProductInCartComponent } from './components/product-in-cart/product-in-cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SideCartComponent,
    ListProductsCartComponent,
    ProductInCartComponent,
    CartPageComponent,
    CheckoutPageComponent,

  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    SideCartComponent,

  ]
})
export class CartModule { }
