import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class PostService {
    postList :Array <any>=[
        {id:1,postTitle:"Post 1"},
        {id:2,postTitle:"Post 2"},
        {id:3,postTitle:"Post 3"},
        {id:4,postTitle:"Post 4"},
        {id:5,postTitle:"Post 5"},
        {id:6,postTitle:"Post 6"},
        {id:7,postTitle:"Post 7"},
    ]
     //Receiving data from Component and add it inside the PostList
    addPost(newPost:any)
    {
        this.postList.push(newPost);
    }
}