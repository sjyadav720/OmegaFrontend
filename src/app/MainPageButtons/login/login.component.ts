import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private router: Router) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: [],
      password: [],
    });
  }
  un: any;
  ps: any;

  gotoDash() {
    this.un = this.loginForm.controls['userName'].value;
    this.ps = this.loginForm.controls['password'].value;

    if (this.un === 're' && this.ps === 're') {
      alert('RE loading');
      sessionStorage.setItem('role', 'relationexecutive');
      this.router.navigateByUrl('role/relationexecutive/enquiry');
    } 
    if (this.un === 'oe' && this.ps === 'oe') {
      alert('OE loading ');
      sessionStorage.setItem('role', 'operationalexecutive');
      this.router.navigateByUrl('role/operationalexecutive/cibilscore');
    } 
  }
}
