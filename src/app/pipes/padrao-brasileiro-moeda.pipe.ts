import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'padraoBrasileiroMoeda'
})
export class PadraoBrasileiroMoedaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)
    return null;
    return value.replace('.', ',');
  }

}
