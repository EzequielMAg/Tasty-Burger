import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DeliveryType } from 'src/app/core/enums';

@Component({
  selector: 'app-edit-delivery-type',
  templateUrl: './edit-delivery-type.component.html',
  styleUrls: ['./edit-delivery-type.component.css']
})
export class EditDeliveryTypeComponent {

  public deliveryTypeEntries: [string, DeliveryType] [] = Object.entries(DeliveryType); 

  public deliveryTypeToModify: DeliveryType = DeliveryType.Delivery;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<EditDeliveryTypeComponent>,  private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.deliveryTypeToModify = this.data;
  }

  public onSubmit(){
    this.dialogRef.close(this.deliveryTypeToModify);
  }

  public closeDialog(){
    this.dialogRef.close(false);
  }

}
