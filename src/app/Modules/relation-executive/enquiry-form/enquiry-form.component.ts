import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { CommonService } from 'src/app/CommonServices/common.service';
import { BaseResponse } from 'src/app/Models/base-response';
import { EnquiryDetails } from 'src/app/Models/enquiry-details';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss'],
})
export class EnquiryFormComponent implements OnInit {
  constructor(private fb: FormBuilder, public cs: CommonService) {}
  enqForm: FormGroup;

  ngOnInit() {
    this.enqForm = this.fb.group({
      customerId: [0],
      customerFirstName: [''],
      customerMiddleName: [''],
      customerLastName: [''],
      customerLoanFormFillDate: [''],
      customerEmail: [''],
      customerMobileNumber: [0, Validators.required],
      customerPanCard: ['', Validators.required],
      status: [''],
      annualIncome: [0, Validators.required],
    });
  }
  // get pancardNo(){
  //   return this.enqForm.get('pancardNo');
  // }

  sendData() {
    // Swal.fire({
    //   position: 'top',
    //   icon: 'success',
    //   title: 'Your work has been saved',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
    //console.log(this.enqForm.value)
    this.cs
      .saveenquirydetails(this.enqForm.value)
      .subscribe((response: BaseResponse) => {
        let msg = response.msg;
        alert(msg);
        // console.log(d)
        // this.msg=d.msg
        //let res=JSON.stringify(d);
        // let msg=d.
        //console.log(res)
      });
  }
}
