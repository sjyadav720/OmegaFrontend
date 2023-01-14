import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { RouterModule, Routes } from '@angular/router';

const reRouting: Routes = [
  { path: 'enquiry', component: EnquiryFormComponent },
  { path: 'viewenquiry', component: ViewEnquiryComponent },
  { path: 'loanform', component: LoanFormComponent },
];

@NgModule({
  declarations: [EnquiryFormComponent, ViewEnquiryComponent, LoanFormComponent],
  imports: [CommonModule, RouterModule.forChild(reRouting)],
  exports: [EnquiryFormComponent, ViewEnquiryComponent, LoanFormComponent],
})
export class RelationExecutiveModule {}
