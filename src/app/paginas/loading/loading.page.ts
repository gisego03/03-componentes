import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  loading:HTMLIonLoadingElement;
  constructor(private readonly loadingCtrl: LoadingController) { }

  async ngOnInit() {
     this.presentLoading('Espere');

     setInterval(()=>{
      this.loading.dismiss();
     },2000);

  }

  async presentLoading(message){
    this.loading = await this.loadingCtrl.create({
      message,
      // duration: 2000
    });
    return await this.loading.present(); 
  }

}
