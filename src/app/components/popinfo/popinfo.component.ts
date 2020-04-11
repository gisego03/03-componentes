import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items= new Array(40)

  constructor(private readonly popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number){
    console.log(valor+': ', new Date().getTime());
    this.popoverCtrl.dismiss({item: valor});
  }
}
