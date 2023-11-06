import { Component } from '@angular/core';
import { Product } from 'src/app/core/models';

@Component({
  selector: 'products-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.css']
})
export class SideCartComponent {

  /* public productsArray: Product[] = []; */
  public productsArray: Product[] | string[] = ["asd"];

  public clearCart(): void {
    this.productsArray = [];
  }

}
