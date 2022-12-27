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
    <!--
      <app-input [contador]='addValue'></app-input>
      <button (click)="add()">Add</button>
    -->

    <!--
      <ng-template [ngIf] = "getDados">
        <h1>{{ getDados.nome }}</h1>
        <h2>{{ getDados.idade }}</h2>
      </ng-template>
      <app-output (enviarDados)="setDados($event)"></app-output>
      <br>
      <app-food-add></app-food-add>
      <app-food-list></app-food-list>
      <router-outlet></router-outlet>
      <br>
      <app-forms></app-forms>
      <br>
    -->
    <app-reactive-forms></app-reactive-forms>
  `,
})
export class AppComponent implements OnInit{
  public addValue: number = 0;

  public getDados: {nome: string, idade: number} | undefined;

  constructor() {}

  public add(){
    this.addValue += 1;
  }

  ngOnInit(): void {    
  }

  public setDados(event: {nome: string, idade: number}){
    this.getDados = event;
  }
}
