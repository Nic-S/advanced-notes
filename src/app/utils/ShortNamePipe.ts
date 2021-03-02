import { Pipe, PipeTransform } from '@angular/core';

/*
pipe that return initial for each word
*/
@Pipe({
  name: 'shortName',
})
export class ShortNamePipe implements PipeTransform {
  transform(fullName: string): any {
    return fullName
      .split(' ')
      .map(n => n[0])
      .join('');
  }
}
