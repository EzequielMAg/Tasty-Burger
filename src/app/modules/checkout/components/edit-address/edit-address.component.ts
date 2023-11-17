import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent {

  public address: string = 'Sin dirección';
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<EditAddressComponent>){}

  public editAddress(){
    console.log("Se edito la dirección");
    this.closeDialog();
  }

  closeDialog(){
    this.dialogRef.close(false);
  }
}
