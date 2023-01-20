import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/CommonServices/common.service';
import { BaseResponse } from 'src/app/Models/base-response';
import { EnquiryDetails } from 'src/app/Models/enquiry-details';

// declare function slideIn():void;

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.scss'],
})
export class ViewEnquiryComponent {
  myScriptElement: HTMLScriptElement;

 
constructor(private fb:FormBuilder, public cs:CommonService, private router:Router){}


enqData:BaseResponse[];

  ngOnInit() {
  // this.cs.viewenuirydetails().subscribe((data:any)=>{
  // this.enq=data.responceData
  // })
  this.cs.getbystatus("Enquired").subscribe((response:any)=>{
    this.enqData=response.responceData
});
  

// slideIn();
// this.myScriptElement=document.createElement("script");
// this.myScriptElement.src=""

//  }
  }

 
chkCibil(id:number){

this.cs.chkcibile(id).subscribe((cb:any)=>{
  if(cb==1)
  {

    alert("Cibil Accepted");
    this.router.navigateByUrl("/role/relationexecutive/accepted");

  }
  if(cb==2)
  {

    alert("Cibil Rejeted");
    this.router.navigateByUrl("/role/relationexecutive/rejected");
  }
this.ngOnInit();
    });
  }

}
