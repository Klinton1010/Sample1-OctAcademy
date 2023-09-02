import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

@Pipe({name:'append'})
export class AppendPipe implements PipeTransform{
    transform(value: any,args?:any) {
        return "city Name:"+value;
    }

}