import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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

  private emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  registerForm: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirm: new FormControl('', [Validators.required]),

  }, {
    validators: this.passwordMatchValidator('password', 'passwordConfirm'),
  });


  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder){}

  public async registerUser(){

    let emailExists: boolean = await this.authService.userEmailExists(this.registerForm.value.email)

    console.log();

    if(!emailExists){

      console.log("Email correcto!");
      this.saveFormUserData();
      this.authService.addUser(this.user);
      this.router.navigate(["/auth/login"]);
    }else{
      console.log("El email ya se encuentra registrado")
      this.registerForm.reset({ name: this.user.name });
    }

    console.log(this.user);
  }

  isValidFiled(field: string): boolean | null {

    return this.registerForm.controls[field].errors && this.registerForm.controls[field].touched;
  }

  getFieldError(field: string): string | null {

    if (!this.registerForm.controls[field]) return null;

    const errors = this.registerForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return "Este campo es requerido.";
        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres.`;
        case 'pattern':
          return "Email inválido.";
        case 'passwordMismatch':
          return "Las contraseñas no coinciden";


      }
    }

    console.log(Object.keys(errors));

    return null;
  }

  saveFormUserData(){
    this.user.name = this.registerForm.value.name;
    this.user.email = this.registerForm.value.email;
    this.user.password = this.registerForm.value.password;

  }


  passwordMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordControl = formGroup.get(controlName);
      const confirmPasswordControl = formGroup.get(matchingControlName);

      if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } else {
        if (confirmPasswordControl) {
          confirmPasswordControl.setErrors(null);
        }
        return null;
      }
    };
  }

}
