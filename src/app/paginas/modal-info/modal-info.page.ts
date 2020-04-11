import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input('nombre') nombre: string;
  @Input('pais') pais: string;

  constructor(private readonly modalCtrl: ModalController) { }

  ngOnInit() {

  }

  salirSinArgumentos(){
    this.modalCtrl.dismiss();
  }
  salirConArgumentos(){
    this.modalCtrl.dismiss({any:'any'})
  }

}
