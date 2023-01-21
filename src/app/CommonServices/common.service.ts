import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer';
import { CustomerAddress } from '../Models/customer-address';
import { CustomerAllDocuments } from '../Models/customer-all-documents';
import { CustomerBankDetails } from '../Models/customer-bank-details';
import { DealerBankDetails } from '../Models/dealer-bank-details';

import { EnquiryDetails } from '../Models/enquiry-details';
import { Profession } from '../Models/profession';
import { VehicleDetails } from '../Models/vehicle-details';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  customerdetails: Customer = {
    customerId: 0,
    customerFirstName: '',
    customerMiddleName: '',
    customerLastName: '',
    customerEmail: '',
    customerMobileNumber: 0,
    customerAlternateMobileNumber: 0,
    customerPanCard: '',
    customerAadharCard: 0,
    customerLoanFormFillDate: '',
    customerGender: '',
    customerQualification: '',
    customerCibilScore: 0,
    annualIncome:0,
    status: '',
    customerAddress: new CustomerAddress(),
    customerProfession: new Profession(),
    customerBankDetails: new CustomerBankDetails(),
    vehicleDetails: new VehicleDetails(),
    dealerBankDetails: new DealerBankDetails(),
    customerAllDocuments: new CustomerAllDocuments(),
  };


  // customerdetails2: Customer = {
  //   customerId: 0,
  //   customerFirstName: '',
  //   customerMiddleName: '',
  //   customerLastName: '',
  //   customerEmail: '',
  //   customerMobileNumber: 0,
  //   customerAlternateMobileNumber: 0,
  //   customerPanCard: '',
  //   customerAadharCard: 0,
  //   customerDateOfBirth: '',
  //   customerGender: '',
  //   customerQualification: '',
  //   customerCibilScore: 0,
  //   annualIncome:0,
  //   customerLoanStatus: '',
  //   customerAddress: new CustomerAddress(),
  //   customerProfession: new Profession(),
  //   customerBankDetails: new CustomerBankDetails(),
  //   vehicleDetails: new VehicleDetails(),
  //   dealerBankDetails: new DealerBankDetails(),
  //   customerAllDocuments: new CustomerAllDocuments(),
  // };

  constructor(private http: HttpClient) {}

  saveenquirydetails(e: EnquiryDetails) {
    return this.http.post(
      'http://localhost:9999/enquiry/saveenquirydetails',
      e
    );
  }

  // viewenuirydetails()    //get all
  // {
  //   console.log("serv")
  // return this.http.get("http://localhost:9999/enquiry/getallenquiry/");

  // }

  chkcibile(id: number) {
    return this.http.get('http://localhost:9999/enquiry/checkcibilscore/' + id);
  }
  getbystatus(status: string) {
    return this.http.get(
      'http://localhost:9999/enquiry/getenquiredpersonbystatus/' + status
    );
  }
  deleteRejectedData(id: number) {
    return this.http.delete(
      'http://localhost:9999/enquiry/deleteenquiry/' + id
    );
  }

  saveLoanApplicationFormData(data: any) {
    return this.http.post(
      'http://localhost:9999/customer/saveCustomerDetails',data
    );
  }
}
