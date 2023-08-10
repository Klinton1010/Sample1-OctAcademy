import { Component,ViewChild,AfterViewInit} from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Angular_Project_1';
  ParentMessage:String='Message coming from Parent Component'
  fromChild!:String;

  @ViewChild(PostComponent) childComponentData:any;

  constructor()
  {
    
  }
  ngAfterViewInit(): void {
    console.log(this.childComponentData)
    this.fromChild=this.childComponentData.childMessage
  }
}
