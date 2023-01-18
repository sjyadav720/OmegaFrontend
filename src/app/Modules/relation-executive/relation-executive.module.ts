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

// --- Kunal Jadhav Start

import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
//--- End


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
    ReactiveFormsModule,FormsModule,HttpClientModule,
    //kunal Jadhav
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    MatStepperModule,
    MatCardModule
    //
  
  ],
  exports: [EnquiryFormComponent, ViewEnquiryComponent, LoanFormComponent,RejectedCibilComponent,AcceptedCibilComponent],
})
export class RelationExecutiveModule {}
