import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent {
  form:any
  constructor(fb:FormBuilder) {
   this.form= fb.group({
      fullName:['',[Validators.required, Validators.minLength(5)]],
      email:['',[Validators.required,Validators.pattern(this.emailRegex)]],
      contactDetails:fb.group({
        address:['',Validators.required],
        shippingAddress:['',Validators.required],
        contactNo:['',[Validators.required,Validators.minLength(10)]]
      }),
      skills:fb.array([])
    })
  }
  formvalue: any;

  emailRegex: string = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
  // mobileRegex:string="^[789]\d{9}$"
  /*form = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.emailRegex),
    ]),

    contactDetails: new FormGroup({
      address: new FormControl('', [Validators.required]),
      shippingAddress: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    }),

    skills: new FormArray([]),
  });*/

  get registerFormControl() {
    return this.form.controls;
  }

  get nextedDetails() {
    return this.form.controls.contactDetails.controls;
  }

  addSkills(skill: HTMLInputElement) {
    this.Skills.push(new FormControl(skill.value));
    skill.value = '';
  }

  onSubmit() {
    this.formvalue = this.form.value;
    //console.table(this.form.value)
  }

  get Skills() {
    return this.form.get('skills') as FormArray;
  }

  removeSkills(i: any) {
    this.Skills.removeAt(i);
  }
}
