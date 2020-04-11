import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit, AfterViewInit {

  publisher='';

  @ViewChild('segment', { static:false }) segment:IonSegment; 
  superHeroes: Observable<any>;
  constructor(
    private readonly dataService: DataService
  ) { }
  
  ngOnInit() {
    this.superHeroes = this.dataService.getSuperHeroes();
      // .subscribe(data => this.superheroes = data)
  }

  ngAfterViewInit(): void {
    this.segment.value="Todos"
  }

  segmentChange(event){
    console.log(event);
    let value = event.detail.value;
    if(value === "Todos")
      this.publisher = '';
    else
      this.publisher = value;
  }

}
