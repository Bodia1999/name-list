import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
@Pipe({
  name: 'letterToUpperCase'
})
export class LetterToUpperCasePipe implements PipeTransform {
  letter: string;
  lengthOfWord: number;
  transform(value: string): string {
    if ( !typeof(value.substr(0, 1) === 'String')) {
      return;
    }
    this.letter = value.substring(0, 1).toUpperCase();
    this.lengthOfWord = value.length;
    return this.letter + value.substr(1, this.lengthOfWord - 1) ;
  }

}
