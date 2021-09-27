import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../model/item';
import { ItemService } from '../services/item.service';
import { PaymentsService } from '../services/payments.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  constructor(private _item : ItemService,
    private _route : ActivatedRoute,
    private _pay : PaymentsService
    ) { }
  
  items : any = {
    name : "",
    quantity : 0,
    cost : 0
  };

  ItemCount: number = 0;

  purchasedItem : any = {
    name : this.items.name,
    quantity : 0,
    amount : 0
  }
  
 
  ngOnInit(): void {
    this.items.name = this._route.snapshot.paramMap.get('name'); 
    this._item.getItems()
    .subscribe(res =>{
      res.forEach((item : Item)=>{
        if(item.name == this.items.name){
          this.items.quantity += 1;
          this.items.cost = item.price;
          this.purchasedItem.name = item.name;
          this.purchasedItem.amount = this.purchasedItem.quantity * this.items.cost;
        }
      })
    },err=>{
      console.error(err);
    })
  }

  calculateAmount(){
    this.purchasedItem.amount= this.purchasedItem.quantity * this.items.cost;
    return this.purchasedItem.amount;
  }

  purchaseStatus(){
    this._pay.purchaseStatus();
  }
  
  

}
