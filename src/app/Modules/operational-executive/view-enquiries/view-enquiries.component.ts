import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/CommonServices/common.service';

@Component({
  selector: 'app-view-enquiries',
  templateUrl: './view-enquiries.component.html',
  styleUrls: ['./view-enquiries.component.scss']
})
export class ViewEnquiriesComponent {

  constructor(private fb:FormBuilder, public cs:CommonService, private router:Router, private rout:ActivatedRoute){}

  showDataOe:FormGroup
  
  ngOnInit() {
  // this.cs.viewenuirydetails().subscribe((data:any)=>{
  // this.enq=data.responceData
  // })
  this.cs.getbystatus("Cibil Approved").subscribe((response:any)=>{
    this.showDataOe=response.responceData
});
}
goToVerifyDocuments(){
  // localStorage.setItem('doc',d);
  // this.cs.customerdetails=c;
  // console.log(this.cs.customerdetails.customerId)
  this.router.navigateByUrl("/role/operationalexecutive/verifydocuments")
  // console.log(this.cs.customerdetails.customerFirstName)a
  }

 
}