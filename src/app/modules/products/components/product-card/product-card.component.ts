import { Component, Input } from '@angular/core';
import { Product, ProductLine } from 'src/app/core/models';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'product-card',

  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{

  @Input()
  public product: Product = new Product();

  public productInCart: ProductLine = new ProductLine();

  constructor(private cartService: CartService) {}

  // METODO QUE RECIBE EL VALOR DEL COUNTERCOMPONENT....
  public updateProductFromCart(counter: number) {

    // Y ACTUALIZA EL id del OBJETO: ProductLineCart....
    if(this.productInCart.idProduct === '') {
      // Solo se asigna una vez..
      this.productInCart.idProduct = this.product.id;
    }

    // Y asigna el producto actual con el valor del counter agarrado
    this.productInCart.quantity = counter;

    // Y AGREGA EL OBJETO CREADO ProductLineCart EN EL CARRITO, a traves del CartService
    this.cartService.updateProductFromCart(this.productInCart);
  }

  get productLineQuantity(): number | undefined {
    return this.cartService.getQuantityProductLineByIdProduct(this.product.id);
  }
}
