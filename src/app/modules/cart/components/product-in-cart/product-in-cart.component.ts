import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductLine } from 'src/app/core/models';
import { CartService } from '../../../../core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent implements OnInit {

  @Input()
  public productInCart!: ProductLine;

  constructor(private cartService: CartService, private productService: ProductsService) {}

  ngOnInit(): void {
    if( !this.productInCart ) throw new Error('productLine property is required');
  }

  get product(): Product {
    return this.productService.getProductById(this.productInCart.idProduct)!;
  }

  // METODO QUE RECIBE EL VALOR DEL COUNTERCOMPONENT....
  public updateProductFromCart(counter: number) {

    // Y asigna el producto actual con el valor del counter agarrado
    this.productInCart.quantity = counter;

    // Y AGREGA EL OBJETO CREADO ProductLine EN EL CARRITO, a traves del CartService
    this.cartService.updateProductFromCart(this.productInCart);
  }

}
