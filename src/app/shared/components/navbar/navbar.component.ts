import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router, private authService: AuthService) { }

  public logOut() {
    this.authService.logOut();
    this.router.navigate(['']);
  }

  get userLoggedIn() {
    return this.authService.userLoggedIn;
  }

}
