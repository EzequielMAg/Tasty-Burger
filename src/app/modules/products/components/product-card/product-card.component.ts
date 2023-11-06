import { Component, Input } from '@angular/core';
import { Product, ProductInCart } from 'src/app/core/models';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'product-card',

  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{

  @Input()
  public product: Product = new Product();

  public productInCart: ProductInCart = new ProductInCart();

  constructor(private cartServcice: CartService) {}

  // METODO QUE RECIBE EL VALOR DEL COUNTERCOMPONENT....
  // Y ACTUALIZA EL OBJETO: ProductLineCart....
  // Y asigna el producto actual con el valor del counter agarrado
  public updateProductInCart(counter: number) {

    this.productInCart.product = this.product;
    this.productInCart.quantity = counter;
  }

  // METODO QUE AGREGA EL OBJETO CREADO ProductLineCart EN EL CARRITO, a traves del CartService

}
