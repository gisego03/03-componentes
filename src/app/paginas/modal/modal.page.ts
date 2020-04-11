import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private readonly modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal(){
    //Quitar el routing de la pagina modal creada, para que lo 
    //muestre como un modal no como pagina
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        'nombre': "Gilberto",
        'pais': 'Mexico'
      }
    });
    modal.present();
    let {data} = await modal.onDidDismiss();
    console.log(data);
    
  }

}
