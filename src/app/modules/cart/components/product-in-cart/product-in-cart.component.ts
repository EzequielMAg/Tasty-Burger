import { Component, Input, OnInit } from '@angular/core';
import { Product, ProductLine } from 'src/app/core/models';
import { CartService } from '../../../../core/services/cart.service';
import { ProductsService } from 'src/app/core/services/products.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent{

  @Input()
  public productInCart!: ProductLine;

  constructor(private cartService: CartService, 
              private productService: ProductsService, 
              private router: Router) {}

  
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

  public isCartView(): boolean {
    return this.router.url === '/cart';
  }

}
