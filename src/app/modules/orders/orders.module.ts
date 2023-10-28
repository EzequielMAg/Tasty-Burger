import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { OrderCardListComponent } from './components/order-card-list/order-card-list.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    OrderCardComponent,
    OrderCardListComponent,
    OrdersPageComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
  ]
})
export class OrdersModule { }
