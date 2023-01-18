import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from 'src/app/CommonServices/common.service';

@Component({
  selector: 'app-rejected-cibil',
  templateUrl: './rejected-cibil.component.html',
  styleUrls: ['./rejected-cibil.component.scss']
})
export class RejectedCibilComponent {

constructor(private fb:FormBuilder,public cs:CommonService){}

rej:any[];
ngOnInit()
{

  this.cs.getbystatus("Cibil Rejected").subscribe((data:any)=>{
    this.rej=data.responceData

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



