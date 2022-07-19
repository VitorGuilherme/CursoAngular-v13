import {Component, OnInit} from '@angular/core';

/*
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked
 */

@Component({
  selector: 'app-root',
  template: `
  <!--  
<app-title *ngIf="destruir"></app-title>
<br>
<button (click)="destruirComponent()">Destruir Componente</button>  
<app-diretivas-estruturais></app-diretivas-estruturais> -->

<!-- 
  <app-diretivas-atributos>
  <h1>Aulas de Diretivas de Atributos</h1>
  <h3>Final da Aula</h3>
  </app-diretivas-atributos>
  <router-outlet></router-outlet>

  <app-diretivas-atributos>
  <h1>Vitor Guilherme</h1>
  <h3>A person in development</h3>
  </app-diretivas-atributos>
  <router-outlet></router-outlet>
  -->

  <app-diretivas-atributos></app-diretivas-atributos>
  `
})
export class AppComponent implements OnInit {

  public destruir: boolean = true

  public destruirComponent() {
    this.destruir = false
  }

  constructor() { }


  ngOnInit(): void { }

}