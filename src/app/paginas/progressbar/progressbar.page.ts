import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.page.html',
  styleUrls: ['./progressbar.page.scss'],
})
export class ProgressbarPage implements OnInit {
  porcentaje: number = 0.05
  constructor() { }

  ngOnInit() {
  }
  cambioRango(event: CustomEvent){
    console.log(event);
    this.porcentaje = event.detail.value / 100
    
  }
}
