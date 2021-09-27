import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _httpClient : HttpClient, private _router:Router) { }

  getAdmin() : Observable<Admin>{
    return this._httpClient.get<Admin>('http://localhost:3000/admin');
  }

  updateAdmin(admin : Admin) : Observable<Admin>{
    return this._httpClient.put<Admin>('http://localhost:3000/admin',admin);
  }
}
