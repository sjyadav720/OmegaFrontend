import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEnquiriesComponent } from './view-enquiries/view-enquiries.component';
import { VerifyDocumentsComponent } from './verify-documents/verify-documents.component';
import { RouterModule, Routes } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

const oeRouting: Routes = [
  {
    path: 'viewenquiries',
    component: ViewEnquiriesComponent,
  },
  { path: 'verifydocuments', component: VerifyDocumentsComponent },
];

@NgModule({
  declarations: [ViewEnquiriesComponent, VerifyDocumentsComponent],
  imports: [CommonModule, RouterModule.forChild(oeRouting),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatRadioModule,
    MatStepperModule,
    MatCardModule,
  ReactiveFormsModule
  ],
    
  exports: [ViewEnquiriesComponent, VerifyDocumentsComponent],
})
export class OperationalExecutiveModule {}
