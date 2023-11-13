import { Component } from '@angular/core';
import { ProductInCart } from 'src/app/core/models';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  constructor(private cartService: CartService){}

  public clearCart(): void {
    this.cartService.clearCart();
  }

  get cart(): ProductInCart[] {
    return this.cartService.cart;
  }

  get totalToPay(): number {
    return this.cartService.totalToPay;
  }

}
