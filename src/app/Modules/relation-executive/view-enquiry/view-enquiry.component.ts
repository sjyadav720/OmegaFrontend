
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/CommonServices/common.service';
import { EnquiryDetails } from 'src/app/Models/enquiry-details';



declare var slideOut;
declare var slideIn;



@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.scss']
})
export class ViewEnquiryComponent {


constructor(private fb:FormBuilder, public cs:CommonService){}
enq:any[];

  ngOnInit() {
  this.cs.viewenuirydetails().subscribe((data:any)=>{
  
this.enq=data.responceData


  })
  }

//   animation()
//   {

// slideIn();
// slideOut();

//   }


 
chkCibil(id:number){

this.cs.chkcibile(id).subscribe((cb:any)=>{

  if(cb==1)
  {

    alert("cibil verified");

  }
  if(cb==2)
  {

    alert("cibil not verified");

  }
}
)





}}


