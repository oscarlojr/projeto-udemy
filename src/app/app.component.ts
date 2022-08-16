import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
    <!--
      <app-title *ngIf="destruir"></app-title>
      <br>
      <button (click)="destruirComponent()">Destruir componente</button>
    -->
    <!--
      <app-data-binding></app-data-binding>
    -->
    <!--
      <app-diretivas-estruturais></app-diretivas-estruturais>
    -->
    <!-- 
      <app-diretivas-atributos>
        <h1>Aulas de diretivas de atributo</h1>
        <h3>Fim do bloco</h3>
      </app-diretivas-atributos>   
      <app-diretivas-atributos></app-diretivas-atributos>
      <app-new-component></app-new-component>
    -->
    <app-input [contador]='addValue'></app-input>
    <button (click)="add()">Add</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{
  public addValue: number = 0;

  constructor() {}

  public add(){
    this.addValue += 1;
  }

  ngOnInit(): void {    
  }
}
