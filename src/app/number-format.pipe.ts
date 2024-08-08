import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform, inject } from '@angular/core';

@Pipe({
  name: 'numberFormat',
})

export class NumberFormatPipe implements PipeTransform {
  private decimalPipe = inject(DecimalPipe);
  transform(value: number, showMoneySign = false) {
    const isPositive = value >= 0;
    const dolarSign = showMoneySign ? '$' : '';
    const formattedValue = this.decimalPipe.transform(value,'1.0-0', 'es');

    const returnedValue = isPositive
    ? `${dolarSign}${formattedValue}`
    : `-${dolarSign}${formattedValue?.replace('-', '')}`;

    return returnedValue;

  }
}


