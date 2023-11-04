import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  public async initSession() {
    //TODO: falta implementar formularios reactivos
    try {
      let isLogin: boolean = await this.authService.login(this.email, this.password)

      if (isLogin) {
        this.router.navigate(["/products"])
      }
      //TODO: falta implementar formularios reactivos
    } catch (error) {
      console.log(error);
    }
  }
}
