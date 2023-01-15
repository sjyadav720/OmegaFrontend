import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    alert('logout')
    localStorage.removeItem('role');
    localStorage.clear();
    this.router.navigateByUrl('/home')

  }
}
