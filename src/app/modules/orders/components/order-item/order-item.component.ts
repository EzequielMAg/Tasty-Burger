import { Component, Input } from '@angular/core';
import { Category } from 'src/app/core/enums';
import { Product } from 'src/app/core/models';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {
  @Input()
  public order: Product = new Product()

  public productsInOrder: Product[] = [{
    id:'12',
    name: 'asdadasd',
    description: 'adad',
    price: 12321,
    urlImage: '321312',
    category: Category.Beers
  }];

}
