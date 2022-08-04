import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
    <app-title title="Olá Mundo"></app-title>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
    setTimeout(()=> {
      console.log(1);
    }, 5000) 
  }
}

