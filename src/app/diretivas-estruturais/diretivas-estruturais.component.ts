import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public list: Array<{ nome: string, idade: number}> = [
    {nome: "Oscar", idade: 37},
    {nome: "Marcelo", idade: 23},
    {nome: "Dener", idade: 46},
  ];
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public nome: string = ''

  constructor() { }

  ngOnInit(): void {
    setInterval( () => {
      if(this.condition){
        this.condition = false;
      }else{
        this.condition = true;
      }
    }, 700)
  }

  public clickOn(){
    if(this.conditionClick){
      this.conditionClick = false;
    }else{
      this.conditionClick = true;
    }
  }

  public clickOnAddList(){
    this.list.push({nome: "Nay", idade: 27})
  }

  public onClickEventList(event: number){
    this.list.splice(event,1);
  }

}
