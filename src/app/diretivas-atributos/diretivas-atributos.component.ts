import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public heightPx: string = "20px";
  public background: string = "red";
  public nome: string = "";

  public salvar() {
    this.list.push({nome: this.nome});
    this.nome = "";
  }
  constructor() { }

  public list: Array<{ nome: string }> = [{nome: "Oscar Junior"}];

  public data: Date = new Date();

  ngOnInit(): void {
    setInterval (() => {
      if(this.valor){
        this.valor = false;       
      }else {
        this.valor = true;        
      }

      if( this.heightPx == "20px"){
        this.heightPx = "50px";
        this.background = "green";
      }else {
        this.heightPx = "20px";
        this.background = "yellow";
      }
    },2000);   
  } 
}
