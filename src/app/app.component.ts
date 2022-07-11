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
  -->
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <router-outlet></router-outlet>
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