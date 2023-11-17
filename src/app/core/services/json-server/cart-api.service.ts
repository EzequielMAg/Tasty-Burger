import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cart, User } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {

  public baseURL: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  public getCartByUserId(userId: string):  Observable<Cart> {
    return this.http.get<User>(`${this.baseURL}/${userId}}`).pipe(
      map((resp) => resp.cart)
    );
  }


  public updateCart(user: User, updatedCart: Cart): Observable<Boolean> {
    user.cart = updatedCart;
    return this.http.patch<Boolean>(`${this.baseURL}/${user.id}`, user);
  }
}
