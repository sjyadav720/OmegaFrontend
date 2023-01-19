import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/CommonServices/common.service';

@Component({
  selector: 'app-accepted-cibil',
  templateUrl: './accepted-cibil.component.html',
  styleUrls: ['./accepted-cibil.component.scss'],
})
export class AcceptedCibilComponent {
  constructor(
    private fb: FormBuilder,
    public cs: CommonService,
    private route: Router
  ) {}
  enq: any[];

  ngOnInit() {
    this.cs.getbystatus('Cibil Approved').subscribe((data: any) => {
      this.enq = data.responceData;
    });
  }

  goToLoanForm() {
    alert('in loan form');
    this.route.navigateByUrl('/role/relationexecutive/loanform');
  }
}
