import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input()
  public userLoggedIn: boolean = false;

  constructor(private router: Router) { }


  public goToLogin(): void {
    this.router.navigate(["auth/login"]);
  }

  public goToRegister(): void {
    this.router.navigate(["auth/register"]);
  }

  public goToMenu(): void {
    this.router.navigate(["products"]);
  }

  public goToHome(): void {
    this.router.navigate(["home"]);
  }

  public goToOrders(): void {
    this.router.navigate(['orders']);
  }

  public logout(): void {

  }



}
