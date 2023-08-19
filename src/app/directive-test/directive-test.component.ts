import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.css']
})
export class DirectiveTestComponent {

  stepVariable?:String;
isActive:boolean=true
 postArray:Array<String>=['post 1','post 2','post 3','post 4','post 5',]
 objArray:Array<any>=[
  // {
  //   id:1,
  //   postTitle:'post 1'
  // },
  // {
  //   id:2,
  //   postTitle:'post 2'
  // },
  // {
  //   id:3,
  //   postTitle:'post 3'
  // },
  // {
  //   id:4,
  //   postTitle:'post 4'
  // },
  // {
  //   id:5,
  //   postTitle:'post 5'
  // }
 ]

 addNewObject()
 {
  let getId;
  //Get Last object in an array
  if(this.objArray.length==0)
  getId=  1;
  else
  {
  let lastArray=this.objArray[this.objArray.length-1]
  getId=  lastArray.id+1
  }
  let updatedObject={id:getId,postTitle:'post '+getId}
    this.objArray.push(updatedObject)
 }

 deleteDate(index:any)
 {
  this.objArray.splice(index,1)
 }

 stepForm(data:String)
 {
    this.stepVariable=data;
 }
}
