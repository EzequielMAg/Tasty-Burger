import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) { }

  goToLogin() {
    this.router.navigate(["auth/login"]);
  }

  goToRegister() {
    this.router.navigate(["auth/register"]);
  }

  goToMenu() {
    this.router.navigate(["products"]);
  }

  goToHome() {
    this.router.navigate(["home"]);
  }
}
