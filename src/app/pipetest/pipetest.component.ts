import { Component } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './pipetest.component.html',
  styleUrls: ['./pipetest.component.css']
})
export class PipetestComponent {

  title:string="learning angular course"
  count:number=28654526
  dc:number=3.8654525

  price:number=99.99985

  today:Date=new Date();
}
