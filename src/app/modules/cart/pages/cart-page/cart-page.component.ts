import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  constructor(private cartService: CartService,
              private authService: AuthService,
              private router: Router){}

  public clearCart(): void {
    this.cartService.clearCart();
  }

  get cart(): Cart {
    return this.cartService.cart;
  }

  get totalToPay(): number {
    return this.cartService.totalToPay;
  }

  public checkAuthentication(): void {

    if (this.authService.checkAuthentication()) {
      this.router.navigate(['/checkout']);

      //Guardar el carrito ACA
      this.cartService.saveCartJson();
    } else {
      this.authService.fromCartPageComponent = true;
      this.router.navigate(['/auth/login']);
    }


  }


}
