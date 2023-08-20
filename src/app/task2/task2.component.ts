import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {

  name?:String;
  email?:String;
  address?:String;

  peopleArray:Array<any>=[]


  formSubmit()
  {
    let id;
    if(this.peopleArray.length==0)
        id=1
    else
    {
      let getId=this.peopleArray[this.peopleArray.length-1].id
      id=getId+1
    }
      let obj={
        id:id,
        name:this.name,
        email:this.email,
        address:this.address
      }
      this.peopleArray.push(obj)
  }

  deleteAction(index:any){
        this.peopleArray.splice(index,1)
  }
}
