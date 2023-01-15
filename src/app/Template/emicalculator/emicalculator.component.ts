import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.scss']
})
export class EMICalculatorComponent {


  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.fb.group({
      amount:[this.value]
    })
    
  }
  disabled = false;
  max = 10000000;
  min = 100000;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 100000;


  disabled1 = false;
  max1 = 30;
  min1 = 1;
  showTicks1 = false;
  step1 = 1;
  thumbLabel1 = false;
  year = 1;

  disabled3 = false;
  max3 = 20;
  min3 = 1;
  showTicks3 = false;
  step3 = 1;
  thumbLabel3 = false;
  interestrate= 0;

  emiInt=0 ;
  total=0;
  onedayint=0;
  monthly=0;
  

  


  btn(){
    console.log(this.value);
    console.log(this.year);
    console.log(this.interestrate);

    this.emiInt=this.value*(this.interestrate/100*this.year);
    console.log("Yearly:"+this.emiInt)
    // this.onedayint=this.emiInt/365
    // console.log("Day:"+this.onedayint)
    
    console.log("Monthly:"+this.monthly)
    this.total=this.value+this.emiInt;
    console.log(this.total)
    this.monthly=this.total*this.year/12;
    console.log(this.monthly)


    

    

  }

}
