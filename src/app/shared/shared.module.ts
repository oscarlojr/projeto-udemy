import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Compontes
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAddComponent } from './food-add/food-add.component';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [
    NewComponentComponent, 
    InputComponent, 
    OutputComponent, 
    FoodListComponent, 
    FoodAddComponent,
    MenuComponent
  ],
  exports: [
    NewComponentComponent, 
    InputComponent, 
    OutputComponent, 
    FoodListComponent,
    FoodAddComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class SharedModule { }
