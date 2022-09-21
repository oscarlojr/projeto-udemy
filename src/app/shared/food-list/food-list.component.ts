import { Component, OnInit } from '@angular/core';
import { Foodlist } from 'src/app/module/foodlist';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<Foodlist> = [];

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
    this.foodListService.emitEvent.subscribe(
      res => {
        alert(`Este é o item adicionado: ${res.nome}`);
        return this.foodList.push(res);
      }
    );
    this.foodListService.foodList().subscribe(
      res => this.foodList = res,
      error => error
    );
  }

}
