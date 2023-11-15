import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { EditAddressComponent } from './components/edit-address/edit-address.component';
import { EditDeliveryTypeComponent } from './components/edit-delivery-type/edit-delivery-type.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { FormsModule } from '@angular/forms';
import { EditPayModeComponent } from './components/edit-pay-mode/edit-pay-mode.component';
import { SendOrderDialogComponent } from './components/send-order-dialog/send-order-dialog.component';


@NgModule({
  declarations: [
    EditAddressComponent,
    EditDeliveryTypeComponent,
    CheckoutPageComponent,
    EditPayModeComponent,
    SendOrderDialogComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    CheckoutRoutingModule,
    MatDialogModule
  ],
  exports: [

  ]
})
export class CheckoutModule { }
