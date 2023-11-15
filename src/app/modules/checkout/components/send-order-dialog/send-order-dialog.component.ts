import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-send-order-dialog',
  templateUrl: './send-order-dialog.component.html',
  styleUrls: ['./send-order-dialog.component.css']
})
export class SendOrderDialogComponent implements OnInit{


  constructor(private dialogRef: MatDialogRef<SendOrderDialogComponent>) {}
  ngOnInit(): void {
  }

  public onSubmit(){
    this.closeDialog();
  }

  public closeDialog(){
    this.dialogRef.close();
  }

}
