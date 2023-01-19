import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/CommonServices/common.service';
import { BaseResponse } from 'src/app/Models/base-response';

@Component({
  selector: 'app-rejected-cibil',
  templateUrl: './rejected-cibil.component.html',
  styleUrls: ['./rejected-cibil.component.scss']
})
export class RejectedCibilComponent {

constructor(private fb:FormBuilder,public cs:CommonService){}

rejectData:BaseResponse[];
ngOnInit()
{

  this.cs.getbystatus("Cibil Rejected").subscribe((response:any)=>{
    this.rejectData=response.responceData
});
}

deleteRejectedData(id:number)
{

this.cs.deleteRejectedData(id).subscribe((result)=>{
  this.ngOnInit();


    // console.log(result);


});


}

}



