import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { Category, PayMode } from 'src/app/core/enums';
import { Order, Product } from 'src/app/core/models';
import { OrdersApiService } from 'src/app/core/services/json-server/orders-api.service';
import { ProductsApiService } from 'src/app/core/services/json-server/products-api.service';

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


  //orders hardcodeadas para probar vista
    // private _orders: Order[] = [{
  //   id: '1',
  //   totalPaid: 8300,
  //   payMode: PayMode.withoutPaymentMethod,
  //   date: new Date(),
  //   address: "New York 123",
  //   idUser: '2',
  //   productLineArray: [{
  //     id: '4',
  //     quantity: 3,
  //     product: new Product({
  //       id: '12',
  //       name: 'Hamburguesa Candy',
  //       description: 'Probando!',
  //       price: 1321,
  //       urlImage: "https://firebasestorage.googleapis.com/v0/b/dondepido-befab.appspot.com/o/aMAevv6mArmDRUywEStq%2Fproducts%2Fc05518c7-e67c-4003-be76-6e1d4814715a?alt=media",
  //       category: Category.Beers
  //     })
  //   }, {
  //     id: '10',
  //     quantity: 9,
  //     product: new Product({
  //       id: '12',
  //       name: 'Hamburguesa Tasty',
  //       description: 'asdasdsdasd!',
  //       price: 7551,
  //       urlImage: "https://firebasestorage.googleapis.com/v0/b/dondepido-befab.appspot.com/o/aMAevv6mArmDRUywEStq%2Fproducts%2Fc05518c7-e67c-4003-be76-6e1d4814715a?alt=media",
  //       category: Category.Beers
  //     })
  //   }]
  // },
  // {
  //   id: '3',
  //   totalPaid: 2566,
  //   payMode: PayMode.withoutPaymentMethod,
  //   date: new Date(),
  //   address: "New York 123",
  //   idUser: '8',
  //   productLineArray: [{
  //     id: '1',
  //     quantity: 10,
  //     product: new Product({
  //       id: '12',
  //       name: 'CheeseBurguer',
  //       description: 'Probandoooooooooo!',
  //       price: 1321,
  //       urlImage: "https://firebasestorage.googleapis.com/v0/b/dondepido-befab.appspot.com/o/aMAevv6mArmDRUywEStq%2Fproducts%2Fc05518c7-e67c-4003-be76-6e1d4814715a?alt=media",
  //       category: Category.Beers
  //     })
  //   }, {
  //     id: '4',
  //     quantity: 5,
  //     product: new Product({
  //       id: '12',
  //       name: 'Remolacha burger',
  //       description: 'Probando!',
  //       price: 4000,
  //       urlImage: "https://firebasestorage.googleapis.com/v0/b/dondepido-befab.appspot.com/o/aMAevv6mArmDRUywEStq%2Fproducts%2Fc05518c7-e67c-4003-be76-6e1d4814715a?alt=media",
  //       category: Category.Beers
  //     })
  //   }]
  // }];
  

}
