import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/CommonServices/common.service';
import { EnquiryDetails } from 'src/app/Models/enquiry-details';

// declare function slideIn():void;

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.scss'],
})
export class ViewEnquiryComponent {
  myScriptElement: HTMLScriptElement;

  constructor(
    private fb: FormBuilder,
    public cs: CommonService,
    private route: Router
  ) {}

  enquired: any[];

  ngOnInit() {
    this.cs.getbystatus('Enquired').subscribe((data: any) => {
      this.enquired = data.responceData;
    });

    // slideIn();
    // this.myScriptElement=document.createElement("script");
    // this.myScriptElement.src=""

    //  }
  }

  chkCibil(id: number) {
    this.cs.chkcibile(id).subscribe((cb: any) => {
      if (cb == 1) {
        alert('cibil accepted');
        this.route.navigateByUrl('/role/relationexecutive/accepted');
      }
      if (cb == 2) {
        alert('cibil rejected');
        this.route.navigateByUrl('/role/relationexecutive/rejected');
      }
      this.ngOnInit();
    });
  }
}
