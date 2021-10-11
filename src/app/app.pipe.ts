import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'moneyPipe' })
export class MoneyPipe implements PipeTransform {

  transform(value: any): any {
    if (!isNaN(value)) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } else {
      return value;
    }
  }

}
