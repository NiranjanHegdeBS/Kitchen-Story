import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {

  constructor(private _items : ItemService) { }

  foodList: any = [
    {value:'Select the Food',label:"Select the Food"},
    {value:'Bread',label:"Bread"},
    {value:'vinegar',label:"vinegar"},
    {value:'Cheese',label:"Cheese"},
    {value:'cake',label:"cake"}, 
  ]

  selectedValue:string = "";
  selectedQuantity:number = 0;

  quantityList : any = [
    {value:'Select the Quantity',label:"Select the Quantity"},
    {value:1,label:"1"},
    {value:2,label:"2"},
    {value:3,label:"3"},
    {value:4,label:"4"},
    {value:5,label:"5"},

  ]
  add_item_msg = ""
  ngOnInit(): void {
  }
  item:Item = new Item();
  updateItems(){
    var priceList  = {
      bread : 50,
      vinegar : 60,
      cake : 50,
      cheese : 90
    }
    
    if(this.selectedValue == "Select the Food" || (typeof this.selectedQuantity ) != "number"){
      this.add_item_msg = "Invalid Input"
    }else
    {
      this.add_item_msg = ""
      for(var i = 0; i < this.selectedQuantity; i++){
        
        this.item = new Item();
        this.item.name = this.selectedValue.toLowerCase();
        switch(this.item.name){
          case "bread" : this.item.price = priceList['bread']; break;
          case "vinegar" : this.item.price = priceList['vinegar']; break;
          case "cake" : this.item.price = priceList['cake']; break;
          case "cheese" : this.item.price = priceList['cheese']; break;
        }
        this._items.addItems(this.item)
        .subscribe(res =>{
          alert(this.selectedValue + " added successfully")
          this.selectedValue= "";
          this.selectedQuantity= 0;
        },err=>{
          console.log(err)
        })
      }
    }
  
}

}
