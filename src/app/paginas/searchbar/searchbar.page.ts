import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  /* 
    ##################################### NOTA #####################################
      El searchbar se genero dentro del componente Header y se envia un objeto para 
      configurarlo y sacar su valor 
    ##################################### NOTA #####################################
  */
  searchbarConfig={ 
    placeholder: 'Buscar por algo',
    handler: (e)=> this.searchbarHandler(e)//Con función de flecha unciona el filtro, sin ella no
  }
  albumes: any[] = []
  searchText= '';

  constructor(
    private readonly dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe(x=>{
      console.log(x);
      this.albumes = x;
    })
  }

  searchbarHandler(event: CustomEvent){
    this.searchText = event.detail.value;
    console.log(this.searchText);
    // return true
  }

}
