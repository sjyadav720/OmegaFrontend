import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent {
    constructor(private fb:FormBuilder){}
    enqForm:FormGroup;
    ngOnInit(){
      this.enqForm=this.fb.group({
        customerId:[],
        firstName:[],
        lastName:[],
        age:[],
        email:[],
        mobileNo:[],
        pancardNo:[]
      })
    }
    // get pancardNo(){
    //   return this.enqForm.get('pancardNo');
    // }
    sendData(){
      alert("hello")
      console.log(this.enqForm.value)
    }
  }
  

