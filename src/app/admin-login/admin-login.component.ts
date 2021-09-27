import { Component, OnInit } from '@angular/core';
// import { Admin } from '../model/Admin';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Admin } from '../model/Admin';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private _admin : AdminService, private _auth:AuthService,
    private _router:Router) { }
  
    adminCredentials : Admin = new Admin();

  admin:any;

  ngOnInit(): void {
    this.adminCredentials.adminPassword = "";
    this.adminCredentials.adminUserName = "";
  }

  
  adminLogin(){
    this._admin.getAdmin().subscribe(credentials=>{
      if(credentials.adminPassword == this.adminCredentials.adminPassword && 
        credentials.adminUserName == this.adminCredentials.adminUserName){
          this._auth.login();
          this._router.navigate(['/admin-page'])
        }
        else{
          console.log("Why?");
          
        }
    })
  }
}
