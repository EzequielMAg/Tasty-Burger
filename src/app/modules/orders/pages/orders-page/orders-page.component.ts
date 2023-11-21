import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { Order } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';
import { OrdersApiService } from 'src/app/core/services/json-server/orders-api.service';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit{

  private _orders: Order[] = [];


  public get orders(): Order[] {
    return this._orders;
  }


  constructor(private ordersApiService: OrdersApiService, private authService : AuthService){}
  
  ngOnInit(): void {
    this.getOrders();
  }

  public async getOrders() {
    try {
      let responseApi = this.ordersApiService.getOrdersByUserId(this.authService.currentUser!.id);
      const data = await lastValueFrom(responseApi);

      this._orders = data.map( (orderData: any) => new Order(orderData) );
      console.log(this._orders);

    } catch (error) {
      console.log(error);
    }
  }

}
