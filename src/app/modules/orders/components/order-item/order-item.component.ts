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

}
