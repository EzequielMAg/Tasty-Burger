import { Component, Input } from '@angular/core';
import { Order } from 'src/app/core/models';

@Component({
  selector: 'order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {
  @Input()
  public order: Order = new Order();

}
