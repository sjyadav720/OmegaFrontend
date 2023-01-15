import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/CommonServices/common.service';
import { EnquiryDetails } from 'src/app/Models/enquiry-details';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent implements OnInit {
    constructor(private fb:FormBuilder, public cs:CommonService){}
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
      alert("Send Successfully")
      console.log(this.enqForm.value)
      this.cs.saveenquirydetails(this.enqForm.value).subscribe();
    }
  }
  

