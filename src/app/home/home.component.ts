import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _item : ItemService, 
    private _router:Router) { }  

    name:string = "";
  
    itemExists : boolean = false;
    ngOnInit(): void {
      
  }

  searchItem(){
   this._item.getItems().subscribe(res=>{
       res.forEach((element: any) => {
          if(element.name == this.name.toLowerCase()){
            this.itemExists = true;
          }
        });
        if(this.itemExists){
          this._router.navigate([`/items/${this.name.toLowerCase()}`])
        }
      })
  }
}
