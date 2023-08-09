import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  title:String="This is Header"

  // Initialize fully loaded inside the browser
  ngOnInit(): void {
    
  }

}
