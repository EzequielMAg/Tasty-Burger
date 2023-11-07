import { Component, Input, OnInit } from '@angular/core';
import { ProductInCart } from 'src/app/core/models';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'product-in-cart',
  templateUrl: './product-in-cart.component.html',
  styleUrls: ['./product-in-cart.component.css']
})
export class ProductInCartComponent implements OnInit {

  @Input()
  public productLine!: ProductInCart;

constructor(private cartService: CartService) {}

  ngOnInit(): void {
    if( !this.productLine ) throw new Error('productLine property is required');
  }

  // METODO QUE RECIBE EL VALOR DEL COUNTERCOMPONENT....
  public updateProductLine(counter: number) {

    // Y asigna el producto actual con el valor del counter agarrado
    this.productLine.quantity = counter;

    // Y AGREGA EL OBJETO CREADO ProductLineCart EN EL CARRITO, a traves del CartService
    this.cartService.updateProductInCart(this.productLine);
  }

}
