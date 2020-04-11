import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  constructor(private readonly httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOptions(){
    return this.httpClient.get<Componente[]>('/assets/data/menu.json');
  }

  getAlbumes(){
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getSuperHeroes() {
    return this.httpClient.get<any[]>('/assets/data/superheroes.json')
      .pipe(
        delay(3000)
      );
  }

}
