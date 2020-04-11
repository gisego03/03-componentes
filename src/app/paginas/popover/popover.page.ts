import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private readonly popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(event){
    const popover = await this.popoverCtrl.create({
      component: PopinfoComponent,
      event,
      mode: 'ios',
      backdropDismiss: false,
    });
    popover.present();
    //Obtener información de la propiedad del objeto que regresa, 
    //el nombre ente llaves debe ser igual a la propiedad
    // let dataDid = await popover.onDidDismiss();
    // console.log(dataDid+': ', new Date().getTime());
    let dataWill = await popover.onWillDismiss();
    console.log(dataWill +': ', new Date().getTime());

    
  }

}
