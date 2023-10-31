import { Component } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  public email: string = '';
  public password: string = '';

  constructor(private apiService: ApiService, private router: Router) { }

  public initSession() {

    this.apiService.getUserToAuth(this.email, this.password).subscribe({

      next: (result) => {
        if(result.length === 1) {
          this.router.navigate(["/products"]);
        }
      },
      error: (error) => console.log(error)
    });
  }



}
