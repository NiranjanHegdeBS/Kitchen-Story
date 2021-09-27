import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/Admin';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  validate(){
    
    
  }
  status_msg = "";
  admin : Admin = new Admin();
  password_new = "";
  password_new_reentered = ""

  constructor(private _adminService : AdminService) { }
  
  ngOnInit(): void {
  }

  updatePassword(){
    this._adminService.updateAdmin(this.admin)
    .subscribe(res=>{
      alert('Updated successfully')
    },err=>{
      console.error(err)
    })
  }

}
