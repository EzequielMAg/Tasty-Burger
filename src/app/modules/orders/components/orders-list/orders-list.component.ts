import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models';

@Component({
  selector: 'orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {

  @Input() 
  public orders: Product[] = [];

}
