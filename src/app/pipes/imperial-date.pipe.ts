import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imperialDatePipe'
})
export class ImperialDatePipe implements PipeTransform {
  readonly dateParser = /^(\d)?(\d{3})?(\d{3})\.M(\d+)$/;

  transform(imperialDate: string) {
    if (!imperialDate) {
      return '';
    }

    if (!imperialDate.match(this.dateParser)) {
      return `Could not parse date: '${imperialDate}'`;
    }

    const parts = this.dateParser.exec(imperialDate);
    let result = '';

    if (parts[1]) {
      result += `Class ${parts[1]} date<br />`;
    }
    if (parts[2]) {
      result += `${parts[2]}th day of `;
    }

    result += (+parts[4] - 1) * 1000 + +parts[3];
    return result;
  }
}
