import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/app/core/services/json-server/users-api.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  public email: string = '';
  public password: string = '';

  constructor(private usersApiService: UsersApiService, private router: Router) { }

  public initSession() {

    this.usersApiService.getUserToAuth(this.email, this.password).subscribe({

      next: (result) => {
        if(result.length === 1) {
          this.router.navigate(["/products"]);
        }
      },
      error: (error) => console.log(error)
    });
  }


}
