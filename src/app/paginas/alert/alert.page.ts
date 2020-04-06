import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  name: string = 'Alert';

  constructor(private readonly alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async present(){
    const aler = await this.alertCtrl.create({
      header: 'header',
      message: 'message',
      subHeader: 'subheader',
      backdropDismiss: true,
      buttons:[
        {
          text: 'Aceptar',
          // role: 'Acept',
          handler: ()=>{
            alert("HOLIS");
            // aler.dismiss();
          }
        },
        {
          text:'Cancelar',
          role: 'cancel',

          // handler: ()=>{
          //   alert('Cancelar')
          // }
        }
      ],
      keyboardClose: true,
    });
    await aler.present();
  }

  async presentPrompt(){
    let alertPropmpt = await  this.alertCtrl.create({
      header: 'Asignar nombre',
      backdropDismiss: true,
      // message: 'Nombre:',
      inputs:[
        {
          id:'nombre',
          name:'nombre',//propiedad para reconocer el objeto
          label: 'Nombre',
          type: "text",
          placeholder: 'Nombre'
        }
      ],
      buttons:[
        {
          text: 'Aceptar',
          handler:(data) => {
            console.log(data);
            if(data.nombre && data.nombre.length>2)
              this.name = data.nombre;
          }
        },
        {
          text:'Cancelar',
          role:'Cancel',
          cssClass: 'danger',
          handler:(data)=>{
            console.log(data);

          }
        }
      ]
    });
    let value = await alertPropmpt.present();
    console.log(value);
  }
}
