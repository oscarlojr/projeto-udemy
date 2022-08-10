import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
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

}
