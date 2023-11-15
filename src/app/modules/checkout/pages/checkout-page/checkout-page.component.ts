import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAddressComponent } from '../../components/edit-address/edit-address.component';
import { EditPayModeComponent } from '../../components/edit-pay-mode/edit-pay-mode.component';
import { DeliveryType, PayMode } from 'src/app/core/enums';
import { EditDeliveryTypeComponent } from '../../components/edit-delivery-type/edit-delivery-type.component';
import { SendOrderDialogComponent } from '../../components/send-order-dialog/send-order-dialog.component';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {

  public address: string = 'Ingresa tu dirección';
  public payMode: PayMode = PayMode.withoutPaymentMethod;
  public deliveryType: DeliveryType = DeliveryType.Delivery;

  constructor(private dialog: MatDialog){}

  editAddress(){
    const dialogRef = this.dialog.open(EditAddressComponent, {data: this.address, height: '220px', width: '300px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log("el cuadro de dialogo se cerro con resultado: ", result);
    })
  }

  editDeliveryType(){
    const dialogRef = this.dialog.open(EditDeliveryTypeComponent, {data: this.deliveryType, height: '220px', width: '300px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log("el cuadro de dialogo se cerro con resultado: ", result);
    console.log(this.deliveryType);
  })
}

  editPayMode(){
    const dialogRef = this.dialog.open(EditPayModeComponent, {data: this.payMode, height: '400px', width: '350px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log("el cuadro de dialogo se cerro con resultado: ", result);
    console.log(this.payMode);

    })
  }

  onSubmit(){
    const dialogRef = this.dialog.open(SendOrderDialogComponent, {height: '280', width: '400'});
    dialogRef.afterClosed().subscribe(result => {
      console.log("el cuadro de dialogo se cerro con resultado: ", result);

    })

  }



}