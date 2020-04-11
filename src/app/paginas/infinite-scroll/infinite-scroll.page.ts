import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, { static: false}) infiniteScroll: IonInfiniteScroll;
  data = new Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){

    setTimeout(()=>{
    
      if(this.data.length>50) {
        this.infiniteScroll.disabled = true;
        return;
      }

      let data = new Array(20);
    
      this.data.push(... data);
      this.infiniteScroll.complete();
    }, 1500);

  }

}
