import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Module Interface
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

  private httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',
    })
  }  

  private url: string = "http://localhost:3000/"; //list-food

  constructor(private http: HttpClient) { }

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

  public foodListEdit(value: string, id: number): Observable<Foodlist>{
    return this.http.put<Foodlist>(`${this.url}list-food/${id}`, {nome: value}).pipe(
      res => res,
      error => error
    )
  }

  public foodListDelete(id: number): Observable<Foodlist>{
    return this.http.delete<Foodlist>(`${this.url}list-food/${id}`).pipe(
      res => res,
      error => error
    )
  }

  public foodListAlert(value: Foodlist){
    return this.emitEvent.emit(value);
  }
}
