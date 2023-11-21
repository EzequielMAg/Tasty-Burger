import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const loginRegisterGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoged = authService.checkAuthentication();

  if(!isLoged) {
    return true;
  }

  router.navigate(["/products"]);
  return false;
};
