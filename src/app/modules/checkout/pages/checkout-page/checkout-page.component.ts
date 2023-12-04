import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditAddressComponent } from '../../components/edit-address/edit-address.component';
import { EditPayModeComponent } from '../../components/edit-pay-mode/edit-pay-mode.component';
import { DeliveryType, PayMode } from 'src/app/core/enums';
import { EditDeliveryTypeComponent } from '../../components/edit-delivery-type/edit-delivery-type.component';
import { SendOrderDialogComponent } from '../../components/send-order-dialog/send-order-dialog.component';
import { Order, User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';
import { OrdersService } from 'src/app/core/services/orders.service';
import { CartService } from 'src/app/core/services/cart.service';

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

  constructor(private dialog: MatDialog, private authService: AuthService, private ordersService: OrdersService, private cartService: CartService) {
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
    const dialogRef = this.dialog.open(EditAddressComponent, {data: this.user.address, height: '220px', width: '350px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log("el cuadro de dialogo se cerro con resultado: ", result);
    })
  }

  public editDeliveryType(){
    const dialogRef = this.dialog.open(EditDeliveryTypeComponent, {data: this.deliveryType, height: '230px', width: '350px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log("el cuadro de dialogo se cerro con resultado: ", result);
    this.deliveryType = result;

  })
  }

  public editPayMode(){
    const dialogRef = this.dialog.open(EditPayModeComponent, {data: this.payMode, height: '420px', width: '350px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log("el cuadro de dialogo se cerro con resultado: ", result);
      this.payMode = result;

    })
  }

  onSubmit(){

    const currentDate = new Date();
    let idRandom = this.getRandomNumber().toString();

    let order : Order = new Order
    ({id: idRandom,
      totalPaid: this.cartService.totalToPay,
      payMode: this.payMode,
      dateTime: currentDate,
      address: this.user.address,
      idUser: this.user.id,
      productLineArray: [...this.cartService.cart.productLineArray]})

    this.ordersService.saveOrderInUser(order);
    const dialogRef = this.dialog.open(SendOrderDialogComponent, {height: '280', width: '400'});
    dialogRef.afterClosed().subscribe(result => {
      console.log("el cuadro de dialogo se cerro con resultado: ", result);

    })

  }

  getRandomNumber(): number{
    const randomNumber = Math.random();
    return Math.floor(randomNumber * (300000 - 90000 + 1)) + 90000;
  }



}
