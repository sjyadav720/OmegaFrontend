import { CustomerAddress } from './customer-address';
import { CustomerAllDocuments } from './customer-all-documents';
import { CustomerBankDetails } from './customer-bank-details';
import { DealerBankDetails } from './dealer-bank-details';
import { Profession } from './profession';
import { VehicleDetails } from './vehicle-details';

export class Customer {
  //Customer All Details Fields
  customerId: number;
  customerFirstName: string;
  customerMiddleName: string;
  customerLastName: string;
  customerEmail: string;
  customerMobileNumber: number;
  customerAlternateMobileNumber: number;
  customerPanCard: string;
  customerAadharCard: number;
  customerLoanFormFillDate: string;
  customerGender: string;
  customerQualification: string;
  customerCibilScore: number;
  annualIncome: number; //added for loan form auto fill sh
  status: string;

  customerAddress: CustomerAddress;
  customerProfession: Profession;
  customerBankDetails: CustomerBankDetails;
  vehicleDetails: VehicleDetails;
  dealerBankDetails: DealerBankDetails;
  customerAllDocuments: CustomerAllDocuments;
}
