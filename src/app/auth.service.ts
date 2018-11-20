import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private localstorage: LocalStorageService, private router: Router) { }

  canActivate() {
    const login = this.localstorage.get('user');
    if (!login) {
      this.router.navigate(['./']);
    }
    return login ? true : false;
  }
}
