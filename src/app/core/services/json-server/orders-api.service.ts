import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../../models';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class OrdersApiService {

    public baseURL: string = "http://localhost:3000/orders"

    constructor(private http: HttpClient) { }
    
    getOrders():Observable<Order[]>{
        return this.http.get<Order[]>(`${this.baseURL}`);
    }
}