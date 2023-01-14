import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerifyLoanFormDocumentsComponent } from './verify-loan-form-documents/verify-loan-form-documents.component';
import { GenerateSanctionLetterComponent } from './generate-sanction-letter/generate-sanction-letter.component';
import { RouterModule, Routes } from '@angular/router';

const cmRouting: Routes = [
  {
    path: 'verifyloanformdocuments',
    component: VerifyLoanFormDocumentsComponent,
  },
  {
    path: 'generatesanctionletter',
    component: GenerateSanctionLetterComponent,
  },
];

@NgModule({
  declarations: [
    VerifyLoanFormDocumentsComponent,
    GenerateSanctionLetterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(cmRouting)],
  exports: [VerifyLoanFormDocumentsComponent, GenerateSanctionLetterComponent],
})
export class CreditManagerModule {}
