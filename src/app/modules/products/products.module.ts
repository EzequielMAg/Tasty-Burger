import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';

import { CartComponent } from './components/cart/cart.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardListComponent } from './components/products-card-list/products-card-list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CartComponent,
    MenuPageComponent,
    ProductCardComponent,
    ProductCardListComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
  ]
})
export class ProductsModule { }
