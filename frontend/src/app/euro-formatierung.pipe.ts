import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroFormatierung'
})
export class EuroFormatierungPipe implements PipeTransform {

  transform(value: number): string {
    return value.toFixed(2) + ' €';
  }

}

