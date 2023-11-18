import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from '../../../../core/services/cart.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  public email: string = '';
  public password: string = '';

  private emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  loginForm: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private cartService: CartService) { }


  public async initSession() {

    if(this.loginForm.valid){
    }

    try {
      let isLogin: boolean = await this.authService.login(this.loginForm.value.email, this.loginForm.value.password);

       if (isLogin) {

        if (this.authService.fromCartPageComponent) {
          //Guardar el carrito ACA
          this.cartService.saveCartJson();

          this.router.navigate(['/checkout']);
          this.authService.fromCartPageComponent = false;

        } else {
          this.router.navigate(['/products']);
        }
      }else{

        this.email = this.loginForm.value.email;
        this.loginForm.reset({ email: this.email });

      }

    } catch (error) {
      console.log(error);
    }
  }

  isValidFiled(field: string): boolean | null {

    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {

    if (!this.loginForm.controls[field]) return null;

    const errors = this.loginForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return "Este campo es requerido.";
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        case 'pattern':
        return "Email inválido.";
      }
    }

    return null;
  }



}
