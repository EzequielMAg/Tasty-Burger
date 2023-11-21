import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { UsersApiService } from 'src/app/core/services/json-server/users-api.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit{

  public address: string = 'Sin dirección';
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
              private dialogRef: MatDialogRef<EditAddressComponent>,
              private usersApiService: UsersApiService, 
              private authService: AuthService ) { }
  
   ngOnInit(): void {
    this.address = this.data;
    console.log(this.address);
    console.log(this.data);
  }

  public editAddress(){

      this.usersApiService.updateAddress(this.authService.currentUser!, this.address).subscribe({
  
        next: () => console.log("direccion GUARDADA CON EXITO"),
        error: (error) => console.log(error)
      });
    this.closeDialog();
  }

  closeDialog(){
    this.dialogRef.close(false);
  }
}
