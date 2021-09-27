import { state } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent implements OnInit {

  constructor(private _items : ItemService) { }
  
  lists = {
    bread : 0,
    cake : 0,
    vinegar : 0,
    cheese : 0
  };

  ngOnInit(): void {
    let foodlists = this._items.getItems().subscribe(res=>{
      console.log(res);
      res.forEach(element=>{
        switch(element.name){
          case "bread" : this.lists[element.name] += 1; break;
          case "cheese" : this.lists[element.name] += 1; break;
          case "vinegar" : this.lists[element.name] += 1; break;
          case "cake" : this.lists[element.name] += 1; break;
        }
      })
    })
  }
}
