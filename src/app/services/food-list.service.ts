import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Foodlist } from '../module/foodlist';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();

  private list: Array<string> = [
    "Feijoada",
    "Lasanha",
    "Pizza",
  ];
  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:3000/"; //list-food

  public foodList(): Observable <Foodlist> {
    return this.http.get<Foodlist>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    ) ;
  } 

  public foodListAdd(value: string){
    this.foodListAlert(value);
    this.list.push(value);
  }

  public foodListAlert(value: string){
    return this.emitEvent.emit(value);
  }
}
