import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list: Array<string> = [
    "Feijoada",
    "Lasanha",
    "Pizza",
  ];
  constructor() { }

  public foodList(){
    return this.list;
  }

  public foodListAdd(value: string){
    this.list.push(value);
  }
}
