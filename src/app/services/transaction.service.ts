import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item';
import { Transcation } from '../model/transcation';
import { ItemService } from './item.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private _items : ItemService, private _httpClient : HttpClient) { }

  addPayments(name:string, quantity:number, payments : Transcation):Observable<Transcation> {
    let itemList  = this._items.getItems()
    let idList = Array<number>();
    console.log(name);
    
    itemList.forEach((ele)=>{
      ele.forEach(item =>{
        console.log(item);
        
        if(item.name == name) idList.push(item.id);
      })
      for(var i = 0; i < quantity; i++){
        this._items.deleteItems(idList[i]).subscribe();
        
      }
    })
    
    return this._httpClient.post<Transcation>('http://localhost:3000/payments', payments);
  }
}
