import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardListComponent } from './components/product-card-list/products-card-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    ProductCardListComponent,
    ProductCardComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
