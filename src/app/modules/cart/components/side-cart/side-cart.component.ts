import { Component } from '@angular/core';
import { Product, ProductInCart } from 'src/app/core/models';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'products-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.css']
})
export class SideCartComponent {

  constructor(private cartService: CartService) { }

  public clearCart(): void {
    this.cartService.clearCart();
  }

  get cart(): ProductInCart[] {
    return this.cartService.cart;
  }

}
