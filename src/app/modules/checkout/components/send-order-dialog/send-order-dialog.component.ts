import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-send-order-dialog',
  templateUrl: './send-order-dialog.component.html',
  styleUrls: ['./send-order-dialog.component.css']
})
export class SendOrderDialogComponent implements OnInit{


  constructor(private dialogRef: MatDialogRef<SendOrderDialogComponent>,
              private cartService: CartService) {}
  ngOnInit(): void {
  }

  public onSubmit(){
    this.closeDialog();
  }

  public closeDialog(){
    this.dialogRef.close();
  }

  public clearCart(): void {
    this.cartService.clearCart();
  }
}
