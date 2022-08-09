import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  public nome: string = "Oscar";
  public idade: number = 37;
  constructor() { }

  ngOnInit(): void {
  }

}
