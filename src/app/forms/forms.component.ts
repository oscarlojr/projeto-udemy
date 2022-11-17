import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComidas: Array<{comida: string, price: string}> = [
    {comida: "X-Salada", price: "R$10,00"},
    {comida: "X-Bacon", price: "R$7,00"},
    {comida: "Coxinha", price: "R$6,00"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form: NgForm){
    console.log(form.value);
  }

}
