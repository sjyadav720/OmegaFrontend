import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';

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
     
   console.log(this.loginForm.value);
  
    this.un = this.loginForm.controls['userName'].value;
    this.ps = this.loginForm.controls['password'].value;
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Login Successfully!',
      showConfirmButton: false,
      timer: 2500
    })
    if (this.un === 're' && this.ps === 're') {
      sessionStorage.setItem('role', 'relationexecutive');
      this.router.navigateByUrl('role/relationexecutive/enquiry');
    } 
    else if (this.un === 'oe' && this.ps === 'oe') {
      sessionStorage.setItem('role', 'operationalexecutive');
      this.router.navigateByUrl('role/operationalexecutive/viewenquiries');
    }
    else if (this.un === 'cm' && this.ps === 'cm') {
      sessionStorage.setItem('role', 'creditmanager');
      this.router.navigateByUrl('role/creditmanager/verifyloanformdocuments');
    } 
    else if(this.un === 'ah' && this.ps === 'ah') {
      sessionStorage.setItem('role', 'accounthead');
      this.router.navigateByUrl('role/accounthead/generateledger');
    } 
    
  else{
    
    Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: 'Please Check UserName and Password ?'
  }) 
  }
}}
