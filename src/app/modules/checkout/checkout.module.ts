import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { EditDeliveryTypeComponent } from './components/edit-delivery-type/edit-delivery-type.component';


@NgModule({
  declarations: [

  
    EditAddressComponent,
        EditDeliveryTypeComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ],
  exports: [

  ]
})
export class CheckoutModule { }
