import { Component, Input } from '@angular/core';

import { Order, Product } from 'src/app/core/models';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {

  @Input()
  public order: Order = new Order();

  public panelOpenState: boolean = false;

  constructor(private productService: ProductsService) {}

  public formatDate(date: Date | null): string{
    if(!date){
      return "Sin fecha"
    }

    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    };

    return new Intl.DateTimeFormat("es-ES", options).format(date).replace(',', '').concat(" hs");
  }

  public getProductByid(idProduct: string): Product {

    //console.log(idProduct);
    const test = this.productService.getProductById(idProduct)!;
    //console.log(test);
    return test;
  }

}
