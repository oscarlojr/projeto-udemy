import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges, OnDestroy {
  @Input() public title: string = "Teste!";
  constructor() { }

  ngOnInit(): void {}
  ngOnChanges(): void {}
  ngOnDestroy(): void {
    console.log("Deu bom, ele foi destuído!");
  }
  
}
