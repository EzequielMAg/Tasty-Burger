import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';

import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardListComponent } from './components/products-card-list/products-card-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [
    MenuPageComponent,
    ProductCardComponent,
    ProductCardListComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    CartModule,
  ]
})
export class ProductsModule { }
