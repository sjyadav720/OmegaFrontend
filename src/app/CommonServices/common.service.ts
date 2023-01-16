import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EnquiryDetails } from '../Models/enquiry-details';
import { EnquiryFormComponent } from '../Modules/relation-executive/enquiry-form/enquiry-form.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  
  saveenquirydetails(e:EnquiryDetails)
  {


 return   this.http.post("http://localhost:9999/enquiry/saveenquirydetails",e);

  }

viewenuirydetails()
{
  console.log("serv") 
return this.http.get("http://localhost:9999/enquiry/getallenquiry");

}

chkcibile(id:number){

  return this.http.get("http://localhost:9999/enquiry/checkcibilscore/"+id);

}


}
