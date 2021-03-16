import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number): string{
    return new Intl.NumberFormat('en-IN').format(value);
  }

}
