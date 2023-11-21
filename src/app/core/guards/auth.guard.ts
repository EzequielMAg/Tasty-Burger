import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {

  const authService = inject(AuthService);
  const router = inject(Router);
  const isLoged = authService.checkAuthentication();

  if(!isLoged) {
    router.navigate(["/home"]);
    return false;
  }

  return true;
};
