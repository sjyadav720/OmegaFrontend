import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/CommonServices/common.service';
import { BaseResponse } from 'src/app/Models/base-response';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-accepted-cibil',
  templateUrl: './accepted-cibil.component.html',
  styleUrls: ['./accepted-cibil.component.scss'],
})
export class AcceptedCibilComponent {
  constructor(
    private fb: FormBuilder,
    public cs: CommonService,
    private router: Router
  ) {}
  enqData: BaseResponse[];

  ngOnInit() {
    this.cs.getbystatus('Cibil Approved').subscribe((response: any) => {
      this.enqData = response.responceData;
    });
  }
  goToLoanForm(e: Customer) {
    this.cs.customerdetails = Object.assign({}, e);
    this.router.navigateByUrl('/role/relationexecutive/loanform');
  }
}
