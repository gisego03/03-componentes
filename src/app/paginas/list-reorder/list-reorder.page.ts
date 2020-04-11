import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonButton, IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit, AfterViewInit {

  @ViewChild('lista', { static: false }) lista:IonReorderGroup;
  @ViewChild('button', { static:false }) button: IonButton;

  personajes=[
    'Iron Man',
    'Thor',
    'Capitan America',
    'Viuda Negra',
    'Spiderman',

  ]

  constructor() { }
  ngAfterViewInit(): void {
    this.lista.ionItemReorder.subscribe(this.reorder)
    
  }

  ngOnInit() {
  }

  reorder = async (event) => {
    console.log(event)
    // this.personajes = await this.lista.complete(this.personajes);
    this.personajes=event.detail.complete(this.personajes);

  }

  onClick(){
    console.log('onClick lanzado')
  }

}
