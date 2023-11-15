import { Component, Input } from '@angular/core';
import { ProductLine } from 'src/app/core/models';

@Component({
  selector: 'list-products-cart',
  templateUrl: './list-products-cart.component.html',
  styleUrls: ['./list-products-cart.component.css']
})
export class ListProductsCartComponent {

  @Input()
  public cart: ProductLine[] = [];

}
