import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor() { }
  
  canActivate(): boolean {
    if(this.isLoggedIn())
      return true;
    return false;
  }

  isLoggedIn(){
    if(localStorage.getItem('isLoggedIn') == 'true') return true;
    return false;
  }

  login(){
    localStorage.setItem('isLoggedIn','true')  
  }

  logout(){
    localStorage.removeItem('isLoggedIn') 
  }
}
