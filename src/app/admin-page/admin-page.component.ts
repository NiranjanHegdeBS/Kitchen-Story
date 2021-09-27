import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router'
import { Admin } from '../model/Admin';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  tabIndex = -2 ;

  onTabClick(index: number){
        this.tabIndex = index;
   }
 
}
