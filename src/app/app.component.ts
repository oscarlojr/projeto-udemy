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
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{
  
  constructor() {}

  ngOnInit(): void {    
  }
}
