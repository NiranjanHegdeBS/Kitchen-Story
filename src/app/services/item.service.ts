import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService  {

  constructor(private _httpClient : HttpClient) { }

  getItems():Observable<Item[]>{
    return this._httpClient.get<Item[]>('http://localhost:3000/foodItems')
  }

  addItems(item : Item):Observable<Item[]>{
    return this._httpClient.post<Item[]>('http://localhost:3000/foodItems',item)
  }

  deleteItems(id : number): Observable<Item>{
    console.log("Inn Item: " + id);
    
    return this._httpClient.delete<Item>(`http://localhost:3000/foodItems/${id}`)
  }
}
