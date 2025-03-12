import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate() {

    const isAuthenticated = localStorage.getItem('authToken') !== null;

    if (!isAuthenticated) {

      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
