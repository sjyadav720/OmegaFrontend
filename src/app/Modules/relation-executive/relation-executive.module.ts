import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RejectedCibilComponent } from './rejected-cibil/rejected-cibil.component';
import { AcceptedCibilComponent } from './accepted-cibil/accepted-cibil.component';


const reRouting: Routes = [
  { path: 'enquiry', component: EnquiryFormComponent },
  { path: 'viewenquiry', component: ViewEnquiryComponent },
  { path: 'loanform', component: LoanFormComponent },
  { path: 'rejected', component: RejectedCibilComponent },
  { path: 'accepted', component: AcceptedCibilComponent },

  

];

@NgModule({
  declarations: [EnquiryFormComponent, ViewEnquiryComponent, LoanFormComponent, RejectedCibilComponent, AcceptedCibilComponent],
  imports: [CommonModule, RouterModule.forChild(reRouting),
    ReactiveFormsModule,FormsModule,HttpClientModule],
  exports: [EnquiryFormComponent, ViewEnquiryComponent, LoanFormComponent,RejectedCibilComponent,AcceptedCibilComponent],
})
export class RelationExecutiveModule {}
