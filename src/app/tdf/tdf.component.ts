import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {

  onSubmit(details:NgForm){
    
    console.log(details.value)
  }


  getValue(fullNames:FormControl){
  console.log(fullNames);
  }
}
