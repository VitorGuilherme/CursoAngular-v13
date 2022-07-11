import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Vitor";
  public idade: number = 21;
  public maisUm: number = 1;

  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://media.istockphoto.com/illustrations/black-power-fist-symbol-icon-illustration-id1250735831?s=612x612";
  public imgTitle: string = "Property Binding";

  public position: { x: number, y: number } = { x: 0, y: 0 }

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(valor: MouseEvent) {
    console.log(valor);
  }


  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
