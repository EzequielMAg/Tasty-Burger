import { Injectable } from '@angular/core';
import { OrdersApiService } from './json-server/orders-api.service';
import { AuthService } from './auth.service';
import { Order } from '../models';

@Injectable({providedIn: 'root'})
export class OrdersService {
    constructor(private ordersApiService: OrdersApiService, private authService: AuthService) { }

    public saveOrderInUser(order: Order): void {

        this.ordersApiService.updateUserOrder(this.authService.currentUser!, order).subscribe({
    
          next: () => console.log("PEDIDO GUARDADO CON EXITO"),
          error: (error) => console.log(error)
        });
      }
    
}