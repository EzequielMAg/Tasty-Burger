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

  public payModeToModify: PayMode = PayMode.withoutPaymentMethod;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<EditPayModeComponent>) {}
  ngOnInit(): void {
    this.payModeToModify = this.data;
  }

  public onSubmit(){
    console.log(this.payModeToModify);
    this.closeDialog();
  }

  public closeDialog(){
    this.dialogRef.close();
  }

}
