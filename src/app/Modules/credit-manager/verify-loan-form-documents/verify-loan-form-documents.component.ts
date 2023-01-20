import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/CommonServices/common.service';

@Component({
  selector: 'app-verify-loan-form-documents',
  templateUrl: './verify-loan-form-documents.component.html',
  styleUrls: ['./verify-loan-form-documents.component.scss']
})
export class VerifyLoanFormDocumentsComponent {


  constructor(private fb:FormBuilder, public cs:CommonService,private router:Router){}

  showDataCm:FormGroup
  
  ngOnInit() {
  
  this.cs.getbystatus("Cibil Approved").subscribe((response:any)=>{
    this.showDataCm=response.responceData
  });
}
  generatesanctionletter(){
    this.router.navigateByUrl("/role/creditmanager/generatesanctionletter");
  }
}

