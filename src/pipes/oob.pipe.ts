import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oob',
  pure: false
})
export class OobPipe implements PipeTransform {

  private DatePipe = new DatePipe('en-US'); 
  transform(value: any, ...args: any[]): any {
    // if(value == '' || value == null || value == undefined){
    //   return 'N/A';
    // }else{
    //   return value ? '+91 ' + value : value;
    // }
    return this.DatePipe.transform(value, 'MM/YYYY');
  }

}
