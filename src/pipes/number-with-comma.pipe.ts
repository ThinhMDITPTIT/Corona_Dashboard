import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberWithComma',
})
export class NumberWithCommaPipe implements PipeTransform {
  transform(value: string) {
    let newStr = value.toString();
    if (newStr.length > 3 && !newStr.includes('%')) {
      return newStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      return newStr;
    }
  }
}
