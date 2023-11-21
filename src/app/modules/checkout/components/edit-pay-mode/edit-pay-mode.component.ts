import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PayMode } from 'src/app/core/enums';

@Component({
  selector: 'app-edit-pay-mode',
  templateUrl: './edit-pay-mode.component.html',
  styleUrls: ['./edit-pay-mode.component.css']
})
export class EditPayModeComponent implements OnInit{

  public payModeValues: [string, PayMode] [] = Object.entries(PayMode); 

  public payModeToModify: PayMode = PayMode.CashOnDelivery;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<EditPayModeComponent>) {}
  ngOnInit(): void {
    this.payModeToModify = this.data;
  }

  public onSubmit(){
    this.dialogRef.close(this.payModeToModify);
  }

  public closeDialog(){
    this.dialogRef.close();
  }
  onPayModeChange(selectedPayMode: PayMode): void {
    this.payModeToModify = selectedPayMode;
  }

}
