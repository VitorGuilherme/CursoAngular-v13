import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;

  public list: Array<{ nome: string, idade: number }> = [
    { nome: "Vitor Guilherme", idade: 21 },
    { nome: "Eliane Maria", idade: 44 },
    { nome: "Luzia Paz", idade: 70 }
  ];
  constructor() { }

  public nome: string = 'vitor';

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }

    }, 2000)
  }

  public onClick() {
    if (this.condition) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  }

  public onClickAddList() {
    this.list.push({ nome: "Naruto", idade: 12 });
  }

  public onClickEventList(event: number) {

    this.list.splice(event, 1);

  }

}
