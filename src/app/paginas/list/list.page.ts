import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild("lista", { static:false}) lista: IonList;
  users: any;

  constructor(
    private readonly dataService: DataService,
    private readonly toastCtrl: ToastController
    ) { }

  ngOnInit() {
    this.users = this.dataService.getUsers()
    // .subscribe(x=>{
    //   console.log((x));
    //   this.users= x;
    // })
  }

  async favorite(user){
    await this.presentToas("Guardado en favoritos");
    this.lista.closeSlidingItems();
  }
  async share(user){
    await this.presentToas("Compartido!");
    this.lista.closeSlidingItems();
  }
  async remove(user){
    await this.presentToas("Eliminado");
    this.lista.closeSlidingItems();
  }

  async presentToas(msg){
    const toas = await this.toastCtrl.create({
      message: msg,
      duration:2000
    });
    await toas.present();
  }

}
