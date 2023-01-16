import { Component } from '@angular/core';
import { CommonService } from 'src/app/CommonServices/common.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.scss']
})
export class ViewEnquiryComponent {
  constructor(private cs:CommonService){}
  data:any[];
  ngOnInit(){
    this.cs.view().subscribe((d:any)=>{
      this.data=d.responceData
      // console.log(this.data.)
    });
  }
}
