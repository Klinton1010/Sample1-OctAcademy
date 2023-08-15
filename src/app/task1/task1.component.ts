import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {


  postTitle?:string
  postContent?:String
  postImgUrl?:String
  postLink?:String
  postLinkText?:String
  isChecked?:boolean
}
