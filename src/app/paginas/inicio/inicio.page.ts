import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'logo-chrome',
      name:"Action sheet",
      redirectTo:"/action-sheet"
    },
    {
      icon: 'american-football',
      name:"Alert",
      redirectTo:"/alert"
    },
    {
      icon: 'logo-chrome',
      name:"Avatar",
      redirectTo:"/avatar"
    },    
    {
      icon: 'radio-boton-on',
      name:"Botones y router",
      redirectTo:"/botones"
    },
    
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon:string;
  name:string
  redirectTo:string
}
