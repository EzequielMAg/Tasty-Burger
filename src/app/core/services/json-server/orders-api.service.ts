import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Order, User } from '../../models';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class OrdersApiService {

    public baseURL: string = "http://localhost:3000/users"

    constructor(private http: HttpClient) { }
    

    public getOrdersByUserId(userId: string):  Observable<Order[]> {
        return this.http.get<User>(`${this.baseURL}/${userId}`).pipe(
          map((resp) => resp.orders)
        );
      }

    updateUserOrder(user: User, order: Order): Observable<Boolean>{
        user.orders.push(order);
        return this.http.patch<Boolean>(`${this.baseURL}/${user.id}`, user);
    }


    
}