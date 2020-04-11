import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(data: any[], filter: any, prop: string): any[] {
    
    if(!filter || filter.length<=2)
      return data;

    filter = filter.toLowerCase();

    let dataFiltered = data.filter(x=> x[prop].toLowerCase().includes(filter))
    
    return dataFiltered;
  }

}
