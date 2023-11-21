import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAddressComponent } from '../../components/edit-address/edit-address.component';
import { EditPayModeComponent } from '../../components/edit-pay-mode/edit-pay-mode.component';
import { DeliveryType, PayMode } from 'src/app/core/enums';
import { EditDeliveryTypeComponent } from '../../components/edit-delivery-type/edit-delivery-type.component';
import { SendOrderDialogComponent } from '../../components/send-order-dialog/send-order-dialog.component';
import { User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {

  private user!: User;

  public address: string = 'Ingresa tu dirección';
  public deliveryType: DeliveryType = DeliveryType.Delivery;
  public payMode: PayMode = PayMode.withoutPaymentMethod;

  constructor(private dialog: MatDialog, private authService: AuthService) {
    this.user = this.authService.currentUser!;

  }

  get currentAddress(): string {
    if(this.user.address !== '') {
      return this.user.address;
    } else {
      return this.address;
    }
  }

  public editAddress(){
    const dialogRef = this.dialog.open(EditAddressComponent, {data: this.user.address, height: '220px', width: '300px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log("el cuadro de dialogo se cerro con resultado: ", result);
    })
  }

  public editDeliveryType(){
    const dialogRef = this.dialog.open(EditDeliveryTypeComponent, {data: this.deliveryType, height: '220px', width: '300px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log("el cuadro de dialogo se cerro con resultado: ", result);
    this.deliveryType = result;

  })
  }

  public editPayMode(){
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
