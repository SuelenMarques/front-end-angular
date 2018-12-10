import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unidadeMedida'
})
export class UnidadeMedidaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
    return null;
    return value.replace('ml', ' ML');
  }

}
