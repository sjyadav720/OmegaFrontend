import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { EnquiryDetails } from '../Models/enquiry-details';


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
getbystatus(status:string)
{

return this.http.get("http://localhost:9999/enquiry/getenquiredpersonbystatus/"+status);

}
deleteRejectedData(id:number)
{

return this.http.delete("http://localhost:9999/enquiry/deleteenquiry/"+id);

}


}
