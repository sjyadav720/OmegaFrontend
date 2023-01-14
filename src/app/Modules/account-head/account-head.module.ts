import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanDisbursementComponent } from './loan-disbursement/loan-disbursement.component';
import { GenerateLedgerComponent } from './generate-ledger/generate-ledger.component';
import { GenerateNOCComponent } from './generate-noc/generate-noc.component';
import { RouterModule, Routes } from '@angular/router';

const ahRouting: Routes = [
  { path: 'loandisbursement', component: LoanDisbursementComponent },
  { path: 'generateledger', component: GenerateLedgerComponent },
  { path: 'generatenoc', component: GenerateNOCComponent },
];

@NgModule({
  declarations: [
    LoanDisbursementComponent,
    GenerateLedgerComponent,
    GenerateNOCComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(ahRouting)],
  exports: [
    LoanDisbursementComponent,
    GenerateLedgerComponent,
    GenerateNOCComponent,
  ],
})
export class AccountHeadModule {}
