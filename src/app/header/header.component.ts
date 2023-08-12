import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  title:String="This is Header"
  imgUrl:string='https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg'
  bool:boolean=true
  twowayusername:String="";
  onewayBinding:String="This is one way binding"
  twoway:String ="This is two way Binding"
  
  handleEvent()
  {
    console.log("Handle event clicked")
  }

  onKeyUp($event:any)
  {
    //Traditional Approach
    if($event.keyCode==13)
    {
    console.log("Enter is pressed")
    }
  }

  onKeyUpModern()
  {
    console.log("Enter key is pressed in mordern way")
  }

  valuesOfInput($event:any)
  {
    console.log($event.target.value)
  }

  valuesOfInputAngular(input:any)
  {
       console.log(input)
  }

  twoWayBinding()
  {
    console.log(this.twowayusername)
  }

  onewaybindingExample()
  {
    console.log(this.onewayBinding)
  }

  twoWayDataBinding()
  {
    console.log(this.twoway)
  }
  // Initialize fully loaded inside the browser
  ngOnInit(): void {
    
  }

}
