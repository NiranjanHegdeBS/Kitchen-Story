import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kitchen Story';
  constructor(private _auth:AuthService){}
  
  isLoggedIn(){
    if(this._auth.isLoggedIn()) return true;
    return false;
  }

  logout(){
    this._auth.logout();
  }
}
