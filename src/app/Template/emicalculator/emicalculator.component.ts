import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LabelType, Options } from 'ng5-slider';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.scss'],
})
export class EMICalculatorComponent {
  filters: any;
  pemi = {
    value: '25',
  };
  remi = {
    value: '8.5',
  };
  temi = {
    value: '20',
  };
  memi = {
    value: '240',
  };

  query = {
    amount: '',
    interest: '',
    tenureYr: '',
    tenureMo: '',
  };

  result = {
    emi: '',
    interest: '',
    total: '',
  };
  yrToggel: boolean;
  poptions: Options = {
    floor: 1,
    ceil: 200,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>L</b>';
        case LabelType.High:
          return value + '<b>L</b>';
        default:
          return value + '<b>L</b>';
      }
    },
  };
  roptions: Options = {
    floor: 5,
    ceil: 20,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>%</b>';
        case LabelType.High:
          return value + '<b>%</b>';
        default:
          return value + '<b>%</b>';
      }
    },
  };
  toptions: Options = {
    floor: 1,
    ceil: 30,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>Yr</b>';
        case LabelType.High:
          return value + '<b>Yr</b>';
        default:
          return value + '<b>Yr</b>';
      }
    },
  };
  moptions: Options = {
    floor: 1,
    ceil: 360,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value + '<b>Mo</b>';
        case LabelType.High:
          return value + '<b>Mo</b>';
        default:
          return value + '<b>Mo</b>';
      }
    },
  };
  constructor() {
    this.yrToggel = true;
  }

  ngAfterViewInit() {
    this.update();
  }

  tbupdate(id) {
    if (id == 0) {
      this.pemi.value = (Number(this.query.amount) / 100000).toString();
    } else if (id == 1) {
      this.remi.value = this.query.interest;
    } else if (id == 2) {
      this.temi.value = this.query.tenureYr;
    } else if (id == 3) {
      this.memi.value = this.query.tenureMo;
    }
    this.update();
  }

  update() {
    var loanAmount = Number(this.pemi.value) * 100000;
    var numberOfMonths = this.yrToggel
      ? Number(this.temi.value) * 12
      : Number(this.memi.value);
    var rateOfInterest = Number(this.remi.value);
    var monthlyInterestRatio = rateOfInterest / 100 / 12;

    this.query.amount = loanAmount.toString();
    this.query.interest = rateOfInterest.toString();
    if (this.yrToggel) {
      this.query.tenureYr = this.temi.value.toString();
    } else {
      this.query.tenureMo = this.memi.value.toString();
    }

    var top = Math.pow(1 + monthlyInterestRatio, numberOfMonths);
    var bottom = top - 1;
    var sp = top / bottom;
    var emi = loanAmount * monthlyInterestRatio * sp;
    var full = numberOfMonths * emi;
    var interest = full - loanAmount;
    var int_pge = (interest / full) * 100;

    this.result.emi = emi
      .toFixed(0)
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    var loanAmount_str = loanAmount
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.result.total = full
      .toFixed(0)
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    this.result.interest = interest
      .toFixed(0)
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // constructor(private fb:FormBuilder){}
  // ngOnInit(){
  //   this.fb.group({
  //     amount:[this.value]
  //   })

  // }
  // disabled = false;
  // max = 10000000;
  // min = 100000;
  // showTicks = false;
  // step = 1;
  // thumbLabel = false;
  // value = 100000;

  // disabled1 = false;
  // max1 = 30;
  // min1 = 1;
  // showTicks1 = false;
  // step1 = 1;
  // thumbLabel1 = false;
  // year = 1;

  // disabled3 = false;
  // max3 = 20;
  // min3 = 1;
  // showTicks3 = false;
  // step3 = 1;
  // thumbLabel3 = false;
  // interestrate= 0;

  // emiInt=0 ;
  // total=0;
  // onedayint=0;
  // monthly=0;

  // btn(){
  //   console.log(this.value);
  //   console.log(this.year);
  //   console.log(this.interestrate);

  //   this.emiInt=this.value*(this.interestrate/100*this.year);
  //   console.log("Yearly:"+this.emiInt)
  //   // this.onedayint=this.emiInt/365
  //   // console.log("Day:"+this.onedayint)

  //   console.log("Monthly:"+this.monthly)
  //   this.total=this.value+this.emiInt;
  //   console.log(this.total)
  //   this.monthly=this.total*this.year/12;
  //   console.log(this.monthly)

  // }
}
