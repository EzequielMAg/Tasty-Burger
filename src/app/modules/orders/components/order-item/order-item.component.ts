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

  public panelOpenState: boolean = false;
  public prueba(){
    const date = new Date(); // Obtiene la fecha actual

    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "2-digit" };
    const formattedDate = date.toLocaleDateString(undefined, options);
    
    console.log(formattedDate); 
  }

}
