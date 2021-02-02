import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.auth.estaAutenticado()) {
      this.router.navigateByUrl('/login');
    }
    return true;
  }
  canActivateChild(): boolean {
    if (!this.auth.estaAutenticado()) {
      this.router.navigateByUrl('/login');
    }
    return true;
  }
}
