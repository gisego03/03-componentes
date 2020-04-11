import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(
    private readonly menuCtrl: MenuController,//Cerrar menú desde TS
    private readonly dataService: DataService
    ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOptions();
  }

  toggleMenu(){
    this.menuCtrl.toggle();
  }

}
