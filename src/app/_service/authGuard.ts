import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const isLoggedIn: boolean = Number(sessionStorage.getItem('UserId')) ? true: false;
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/user-login']);
      return false;
    }
  }
}
