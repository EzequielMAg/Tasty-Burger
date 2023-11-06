import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { OrderItemComponent } from './components/order-item/order-item.component';



@NgModule({
  declarations: [
    OrderItemComponent,
    OrdersListComponent,
    OrdersPageComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
  ]
})
export class OrdersModule { }
