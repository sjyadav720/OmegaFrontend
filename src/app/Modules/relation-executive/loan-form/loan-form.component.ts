import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/CommonServices/common.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss'],
})
export class LoanFormComponent {
  constructor(private fb: FormBuilder, private cs: CommonService) {}
  ngOnInit() {

    
  }

  isLinear = true;
  Empregister = this.fb.group({
    //customer Details FormGroup Controls
    customer: this.fb.group({
      customerId: this.fb.control(this.cs.customerdetails.customerId, Validators.required),
      customerFirstName: this.fb.control(this.cs.customerdetails.customerFirstName, Validators.required),
      customerMiddleName: this.fb.control(this.cs.customerdetails.customerMiddleName, Validators.required),
      customerLastName: this.fb.control(this.cs.customerdetails.customerLastName, Validators.required),
      customerPanCard: this.fb.control(this.cs.customerdetails.customerPanCard, Validators.required),
      customerAadharCard: this.fb.control(this.cs.customerdetails.customerAadharCard, Validators.required),
      customerDateOfBirth: this.fb.control(this.cs.customerdetails.customerDateOfBirth, Validators.required),
      customerMobileNumber: this.fb.control(this.cs.customerdetails.customerMobileNumber, Validators.required),
      customerAlternateMobileNumber: this.fb.control(0, Validators.required),
      customerEmail: this.fb.control('', Validators.required),
      customerGender: this.fb.control('', Validators.required),
      customerQualification: this.fb.control('', Validators.required),
      customerCibilScore: this.fb.control(0, Validators.required),
      customerLoanStatus: this.fb.control('', Validators.required),
    }),
    //Address Details FormGroup Controls
    customerAddress: this.fb.group({
      addressId: this.fb.control(0, Validators.required),
      areaName: this.fb.control('', Validators.required),
      cityName: this.fb.control('', Validators.required),
      district: this.fb.control('', Validators.required),
      state: this.fb.control('', Validators.required),
      pincode: this.fb.control(0, Validators.required),
      houseNumber: this.fb.control(0, Validators.required),
      streetName: this.fb.control('', Validators.required),
    }),
    //Professional Details FormGroup Controls
    customerProfession: this.fb.group({
      professionId: this.fb.control(0, Validators.required),
      professionType: this.fb.control('', Validators.required),
      professionMonthlyIncome: this.fb.control(0, Validators.required),
      professionDesignation: this.fb.control('', Validators.required),
      professionWorkingPeriod: this.fb.control(0, Validators.required),
    }),
    //Customer Bank Details FormGroup Controls
    customerBankDetails: this.fb.group({
      customerBankDetailsId: this.fb.control(0, Validators.required),
      customerBankAccountNumber: this.fb.control(0, Validators.required),
      customerBankName: this.fb.control('', Validators.required),
      customerBankBranchName: this.fb.control('', Validators.required),
      customerBankIfscNumber: this.fb.control('', Validators.required),
    }),
    //Vehicle Details FormGroup Controls
    vehicleDetails: this.fb.group({
      customerVehicleId: this.fb.control(0, Validators.required),
      customerVehicleModel: this.fb.control('', Validators.required),
    }),
    //Delear Bank Details FormGroup Controls

    dealerBankDetails: this.fb.group({
      dealerId: this.fb.control(0, Validators.required),
      dealerName: this.fb.control('', Validators.required),
      dealerAddress: this.fb.control('', Validators.required),
      dealerBankAccountNumber: this.fb.control(0, Validators.required),
      dealerBankName: this.fb.control('', Validators.required),
      dealerBankBranchName: this.fb.control('', Validators.required),
      dealerBankIfscNumber: this.fb.control('', Validators.required),
    }),

    PersonalDocs: this.fb.group({
      documentId: this.fb.control(0, Validators.required),
      addressProof: this.fb.control('', Validators.required),
      pancard: this.fb.control('', Validators.required),
      IncomeTax: this.fb.control('', Validators.required),
      aadharCard: this.fb.control('', Validators.required),
      photo: this.fb.control('', Validators.required),
      signature: this.fb.control('', Validators.required),
    }),
  });
  professionId: string;
  professionType: string;
  professionMonthlyIncome: string;
  professionDesignation: string;
  get customerDetails() {
    return this.Empregister.get('customer') as FormGroup;
  }
  get addressDetails() {
    return this.Empregister.get('customerAddress') as FormGroup;
  }
  get professionalDetails() {
    return this.Empregister.get('customerProfession') as FormGroup;
  }
  get customerVehicleDetails() {
    return this.Empregister.get('vehicleDetails') as FormGroup;
  }
  get customerBankDetails() {
    return this.Empregister.get('customerBankDetails') as FormGroup;
  }
  get dealerBankDetails() {
    return this.Empregister.get('dealerBankDetails') as FormGroup;
  }

  panCard: any;
  incomeProof: any;
  photo: any;
  signature: any;
  adhaarCard: any;
  bankPassBook: any;
  onselectfile1(event) {
    this.panCard = event.target.files[0];
  }
  onselectfile2(event) {
    this.incomeProof = event.target.files[0];
  }
  onselectfile3(event) {
    this.photo = event.target.files[0];
  }
  onselectfile4(event) {
    this.adhaarCard = event.target.files[0];
  }
  onselectfile5(event) {
    this.signature = event.target.files[0];
  }
  onselectfile6(event) {
    this.bankPassBook = event.target.files[0];
  }
  Submit() {
    //Assigning value into Customer POJO class
    this.cs.customerdetails.customerId =
      this.Empregister.get('customer').get('customerId').value;
    this.cs.customerdetails.customerFirstName =
      this.Empregister.get('customer').get('customerFirstName').value;
    this.cs.customerdetails.customerMiddleName =
      this.Empregister.get('customer').get('customerMiddleName').value;
    this.cs.customerdetails.customerLastName =
      this.Empregister.get('customer').get('customerLastName').value;
    this.cs.customerdetails.customerEmail =
      this.Empregister.get('customer').get('customerEmail').value;
    this.cs.customerdetails.customerMobileNumber = this.Empregister.get(
      'customer'
    ).get('customerMobileNumber').value;
    this.cs.customerdetails.customerAlternateMobileNumber =
      this.Empregister.get('customer').get(
        'customerAlternateMobileNumber'
      ).value;
    this.cs.customerdetails.customerPanCard =
      this.Empregister.get('customer').get('customerPanCard').value;
    this.cs.customerdetails.customerAadharCard =
      this.Empregister.get('customer').get('customerAadharCard').value;
    this.cs.customerdetails.customerDateOfBirth = this.Empregister.get(
      'customer'
    ).get('customerDateOfBirth').value;
    this.cs.customerdetails.customerGender =
      this.Empregister.get('customer').get('customerGender').value;
    this.cs.customerdetails.customerQualification = this.Empregister.get(
      'customer'
    ).get('customerQualification').value;
    this.cs.customerdetails.customerCibilScore =
      this.Empregister.get('customer').get('customerCibilScore').value;
    // added for auto fill loan form sh
    this.cs.customerdetails.annualIncome =
      this.Empregister.get('customer').get('annualIncome').value;

    this.cs.customerdetails.customerLoanStatus =
      this.Empregister.get('customer').get('customerLoanStatus').value;
    //secondary Referece CustomerAddress POJO class
    this.cs.customerdetails.customerAddress =
      this.Empregister.get('customerAddress').value;
    //secondary Referece Profession POJO class
    this.cs.customerdetails.customerProfession =
      this.Empregister.get('customerProfession').value;
    //secondary CustomerBankDetails Profession POJO class
    this.cs.customerdetails.customerBankDetails = this.Empregister.get(
      'customerBankDetails'
    ).value;
    //secondary Vehicle Details Profession POJO class
    this.cs.customerdetails.vehicleDetails =
      this.Empregister.get('vehicleDetails').value;
    //secondary DealerBankDetails Profession POJO class
    this.cs.customerdetails.dealerBankDetails =
      this.Empregister.get('dealerBankDetails').value;

    console.log(this.cs.customerdetails);

    let data = new FormData();

    let allData = JSON.stringify(this.cs.customerdetails);

    data.append('allData', allData);
    data.append('panCard', this.panCard);
    data.append('incomeProof', this.incomeProof);
    data.append('adhaarCard', this.adhaarCard);
    data.append('photo', this.photo);
    data.append('signature', this.signature);
    data.append('bankPassBook', this.bankPassBook);

    console.log(data);
    this.cs.saveLoanApplicationFormData(data).subscribe((d: any) => {
      console.log(d);
    });
  }
}
