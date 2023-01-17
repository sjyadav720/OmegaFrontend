
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/CommonServices/common.service';
import { EnquiryDetails } from 'src/app/Models/enquiry-details';



// declare function slideIn():void;




@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.scss']
})
export class ViewEnquiryComponent {
  myScriptElement:HTMLScriptElement;


constructor(private fb:FormBuilder, public cs:CommonService){}
enq:any[];

  ngOnInit() {
  this.cs.viewenuirydetails().subscribe((data:any)=>{
  
this.enq=data.responceData


  })
  

// slideIn();
// this.myScriptElement=document.createElement("script");
// this.myScriptElement.src=""

//  }
  }

 
chkCibil(id:number){

this.cs.chkcibile(id).subscribe((cb:any)=>{

  if(cb==2)
  {

    alert("cibil verified");

  }
  if(cb==1)
  {

    alert("cibil not verified");

  }
}
)





}}


