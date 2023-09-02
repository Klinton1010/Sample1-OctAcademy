import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { noSpace } from '../Validators/nospace.validators';


@Component({
  selector: 'app-reactive-form1',
  templateUrl: './reactive-form1.component.html',
  styleUrls: ['./reactive-form1.component.css']
})
export class ReactiveForm1Component {

  data:any
  signInForm:any
  constructor(fb:FormBuilder){
   this.signInForm= fb.group({
      username:['',[Validators.required,noSpace.noSpaceValidation]],
      password:['',Validators.required]
    })
  }

  get controlDetails()
  {
    return this.signInForm.controls;
  }

  submitSignIn(){
    console.log(this.signInForm.value)
    this.data=this.signInForm.value
  }

}
