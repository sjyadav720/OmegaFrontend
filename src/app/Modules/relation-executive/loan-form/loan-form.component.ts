import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/CommonServices/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss'],
})
export class LoanFormComponent {
  constructor(private fb: FormBuilder, private cs: CommonService) {}

  ngOnInit() {}

  isLinear = true;
  Empregister = this.fb.group({
    //customer Details FormGroup Controls
    customer: this.fb.group({
      customerId: this.fb.control(
        this.cs.customerdetails.customerId,
        Validators.required
      ),
      customerFirstName: this.fb.control(
        this.cs.customerdetails.customerFirstName,
        Validators.required
      ),
      customerMiddleName: this.fb.control(
        this.cs.customerdetails.customerMiddleName,
        Validators.required
      ),
      customerLastName: this.fb.control(
        this.cs.customerdetails.customerLastName,
        Validators.required
      ),
      customerPanCard: this.fb.control(
        this.cs.customerdetails.customerPanCard,
        Validators.required
      ),
      customerAadharCard: this.fb.control(
        this.cs.customerdetails.customerAadharCard,
        Validators.required
      ),
      customerLoanFormFillDate: this.fb.control(
        this.cs.customerdetails.customerLoanFormFillDate,
        Validators.required
      ),
      customerMobileNumber: this.fb.control(
        this.cs.customerdetails.customerMobileNumber,
        Validators.required
      ),
      customerAlternateMobileNumber: this.fb.control(0, Validators.required),
      customerEmail: this.fb.control('', Validators.required),
      customerGender: this.fb.control('', Validators.required),
      customerQualification: this.fb.control('', Validators.required),
      customerCibilScore: this.fb.control(0, Validators.required),
      annualIncome: this.fb.control(0, Validators.required),
      status: this.fb.control('', Validators.required),
      // annualIncome: this.fb.control(0, Validators.required),
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
      customerVehiclePrice: this.fb.control(0, Validators.required),
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

    customerAllDocuments: this.fb.group({
      // documentID: this.fb.control(0, Validators.required),
      panCard: this.fb.control('', Validators.required),
      incomeProof: this.fb.control('', Validators.required),
      adhaarCard: this.fb.control('', Validators.required),
      photo: this.fb.control('', Validators.required),
      signature: this.fb.control('', Validators.required),
      bankPassBook: this.fb.control('', Validators.required),
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
  //added now shubham 22/01/2023
  get customerAllDocuments() {
    return this.Empregister.get('customerAllDocuments') as FormGroup;
  }
  documentID: number;
  panCard: any;
  incomeProof: any;
  photo: any;
  signature: any;
  adhaarCard: any;
  bankPassBook: any;
  onselectfile1(event) {
    this.panCard = event.target.files[0];
  }
  onselectfile2(event2) {
    this.incomeProof = event2.target.files[0];
  }
  onselectfile3(event3) {
    this.photo = event3.target.files[0];
  }
  onselectfile4(event4) {
    this.adhaarCard = event4.target.files[0];
  }
  onselectfile5(event5) {
    this.signature = event5.target.files[0];
  }
  onselectfile6(event6) {
    this.bankPassBook = event6.target.files[0];
  }
  submit() {
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
    this.cs.customerdetails.customerLoanFormFillDate = this.Empregister.get(
      'customer'
    ).get('customerLoanFormFillDate').value;
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

    this.cs.customerdetails.status =
      this.Empregister.get('customer').get('status').value;
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

    //shubham 22.01.2023
    this.cs.customerdetails.customerAllDocuments = this.Empregister.get(
      'customerAllDocuments'
    ).value;

    console.log(this.cs.customerdetails);

    let data = new FormData();

    let allData = JSON.stringify(this.cs.customerdetails);

    data.append('panCard', this.panCard);
    data.append('adhaarCard', this.adhaarCard);
    data.append('incomeProof', this.incomeProof);
    data.append('photo', this.photo);
    data.append('signature', this.signature);
    data.append('bankPassBook', this.bankPassBook);
    data.append('allData', allData);

    //console.log(data);
    this.cs.saveLoanApplicationFormData(data).subscribe((d: any) => {
      console.log(d);
    });
  }
  // saveData() {
  //   Swal.fire({
  //     position: 'top',
  //     icon: 'success',
  //     title: 'Save Successfully!',
  //     showConfirmButton: false,
  //     timer: 5000,
  //   });
  // }
}
