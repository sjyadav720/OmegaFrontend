import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  role:string;
  constructor(private router:Router){}
  ngOnInit(){
    this.role=localStorage.getItem('role');
  }
  onLogout(){
    Swal.fire({
    position: 'top',
    icon: 'success',
    title: 'Log-Out Successfully!',
    showConfirmButton: false,
    timer: 5000,
  })
    localStorage.removeItem('role');
    localStorage.clear();
    this.router.navigateByUrl('/home')

  }
}
