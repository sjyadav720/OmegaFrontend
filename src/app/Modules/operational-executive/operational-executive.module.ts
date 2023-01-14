import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEnquiriesComponent } from './view-enquiries/view-enquiries.component';
import { VerifyDocumentsComponent } from './verify-documents/verify-documents.component';
import { RouterModule, Routes } from '@angular/router';

const oeRouting: Routes = [
  {
    path: 'viewenquiries',
    component: ViewEnquiriesComponent,
  },
  { path: 'verifydocuments', component: VerifyDocumentsComponent },
];

@NgModule({
  declarations: [ViewEnquiriesComponent, VerifyDocumentsComponent],
  imports: [CommonModule, RouterModule.forChild(oeRouting)],
  exports: [ViewEnquiriesComponent, VerifyDocumentsComponent],
})
export class OperationalExecutiveModule {}
