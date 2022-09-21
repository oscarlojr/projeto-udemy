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

  public foodList(): Observable <Array<Foodlist>> {
    return this.http.get<Array<Foodlist>>(`${this.url}list-food`).pipe(
      res => res,
      error => error
    ) ;
  } 

  public foodListAdd(value: string): Observable<Foodlist>{
    return this.http.post<Foodlist>(`${this.url}list-food`, {nome: value}).pipe(
      res => res,
      error => error
    )
  }

  public foodListAlert(value: Foodlist){
    return this.emitEvent.emit(value);
  }
}
