import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCerveja'
})
export class FiltroCervejaPipe implements PipeTransform {

  transform(item: any[], value: string): any[] {
    console.log(item)
    if (!item) return [];
    if (value) {
      return item.filter(item => item.nome.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1);
    }
    else {
      return item;
    }
  } 

}
