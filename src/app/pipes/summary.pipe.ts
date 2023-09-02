import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: String,length?:number,caseType?:boolean) {

    if(caseType)
    value=value.toUpperCase();
    if(!length)
    length=20
    return value.substring(0,length);
  }

}
