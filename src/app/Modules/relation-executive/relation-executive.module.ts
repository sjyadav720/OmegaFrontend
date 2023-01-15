import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ShowCibilVerifyComponent } from './view-enquiry/show-cibil-verify/show-cibil-verify.component';
import { ShowCibilRejectedComponent } from './view-enquiry/show-cibil-rejected/show-cibil-rejected.component';
import { ReactiveFormsModule } from '@angular/forms';

const reRouting: Routes = [
  { path: 'enquiry', component: EnquiryFormComponent },
  { path: 'viewenquiry', component: ViewEnquiryComponent },
  { path: 'loanform', component: LoanFormComponent },
];

@NgModule({
  declarations: [EnquiryFormComponent, ViewEnquiryComponent, LoanFormComponent, ShowCibilVerifyComponent, ShowCibilRejectedComponent],
  imports: [CommonModule, RouterModule.forChild(reRouting),
    ReactiveFormsModule,],
  exports: [EnquiryFormComponent, ViewEnquiryComponent, LoanFormComponent],
})
export class RelationExecutiveModule {}
