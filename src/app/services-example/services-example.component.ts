import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import { DataServiceService } from '../Services/data-service.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-services-example',
  templateUrl: './services-example.component.html',
  styleUrls: ['./services-example.component.css'],
})
export class ServicesExampleComponent {

  posts?:Array<any>
  datas?:Array<any>
  constructor(private postService:PostService,private dataService:DataServiceService){
    this.posts=postService.postList;
    this.datas=dataService.datasList;
  }

  
  addNewPost()
  {
    //Adding the Interface type to avoid the runtime error
    let newPost:Post={
      id:10,
      postTitle:"Post 10"
    }
    //Passing data to Service
    this.postService.addPost(newPost);
  }
  
}
