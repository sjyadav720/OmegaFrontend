import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OmegaFinance';

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
