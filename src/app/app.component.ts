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
    <app-diretivas-atributos>
      <h1>Aulas de diretivas de atributo</h1>
      <h3>Fim do bloco</h3>
    </app-diretivas-atributos>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{
  
  constructor() {}

  ngOnInit(): void {    
  }
}
