import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  
  public nome: string = "Oscar";
  public idade: number = 37;
  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://pt.apkshki.com/storage/8970/icon_60edf3fb44c6f_8970_w256.png";
  public descricao: string = "Goku Dragon ball";

  constructor() { }

  ngOnInit(): void {
  }

}
