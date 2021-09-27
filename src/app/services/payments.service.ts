import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService implements CanActivate{

  constructor() { }
  canActivate(): boolean {
    if(localStorage.getItem('purchase') == "true") return true;
    return false;  
  }

  purchaseStatus(){
    localStorage.setItem('purchase','true')
  }

}
