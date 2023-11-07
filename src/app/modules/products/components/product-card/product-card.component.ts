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

  constructor(private cartService: CartService) {}

  // METODO QUE RECIBE EL VALOR DEL COUNTERCOMPONENT....
  public updateProductInCart(counter: number) {
    console.log(this.product);

    // Y ACTUALIZA EL OBJETO: ProductLineCart....
    if(this.productInCart.product.id === '') {
      // Solo se asigna una vez..
      this.productInCart.product = this.product;
      console.log("hola");
    }

    // Y asigna el producto actual con el valor del counter agarrado
    this.productInCart.quantity = counter;

    // Y AGREGA EL OBJETO CREADO ProductLineCart EN EL CARRITO, a traves del CartService
    this.cartService.updateProductInCart(this.productInCart);
  }

  get productLineQuantity(): number | undefined {
    return this.cartService.getQuantityProductLineByIdProduct(this.product.id);
  }
}
