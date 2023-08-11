import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  fromParent!: String;

  fromPost:String="Value from post"

  childMessage:String="from Child Component"

  outputChildMessage:String="Message from Child via Output"

  @Output() messageEvent=new EventEmitter<String>();
  
  ngOnInit(): void {
   
  }

  //Emiting the message to parent component
  sendMessage()
  {
    this.messageEvent.emit(this.outputChildMessage)
  }

}
