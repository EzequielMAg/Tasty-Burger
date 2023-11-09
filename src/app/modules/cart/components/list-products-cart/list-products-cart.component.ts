import { Component, Input } from '@angular/core';
import { ProductInCart } from 'src/app/core/models';
import { Product } from '../../../../core/models';

@Component({
  selector: 'list-products-cart',
  templateUrl: './list-products-cart.component.html',
  styleUrls: ['./list-products-cart.component.css']
})
export class ListProductsCartComponent {

  @Input()
  public cart: ProductInCart[] = [];


  public calculateTotalToPay() {

    let totalToPay = this.cart.reduce( (total, productInCart) => {

      const productPrice: number = productInCart.product.price;
      const quantity: number = productInCart.quantity;
      const subtotal: number = productPrice * quantity;

      return total + subtotal;
    }, 0);

    return totalToPay;
  }

}
