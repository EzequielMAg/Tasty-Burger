import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { Order } from 'src/app/core/models';
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
  public set orders(value: Order[]) {
    this._orders = value;
  }

  constructor(private ordersApiService: OrdersApiService){}
  
  ngOnInit(): void {
    this.getOrders();
  }

  public async getOrders() {
    try {
      let responseApi = this.ordersApiService.getOrders();
      const data = await lastValueFrom(responseApi);

      this.orders = data.map( (orderData: any) => new Order(orderData) );

    } catch (error) {
      console.log(error);
    }
  }

}
