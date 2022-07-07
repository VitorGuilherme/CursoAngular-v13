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
  <app-data-binding></app-data-binding>
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