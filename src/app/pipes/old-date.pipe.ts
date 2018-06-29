import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oldDatePipe'
})
export class OldDatePipe implements PipeTransform {
  transform(oldDate: string) {
    if (!oldDate) {
      return;
    }

    let imperialYear = '' + (+oldDate % 1000);
    imperialYear = imperialYear.padStart(3, '0');

    return `${imperialYear}.M${Math.floor(+oldDate / 1000)}`;
  }
}
