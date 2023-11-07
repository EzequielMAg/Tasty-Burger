import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent {

  public user: User = new User();
  public passwordConfirm: string = '';

  constructor(private authService: AuthService, private router: Router){}

  public registerUser(){
    this.authService.addUser(this.user);
    this.router.navigate(["/products"]);
    console.log(this.user);
  }

}
