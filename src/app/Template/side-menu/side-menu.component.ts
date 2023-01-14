import { Component } from '@angular/core';
import { Menu } from 'src/app/Models/menu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  public menuItems: any[];
  role: string;

  constructor() {}
  ngOnInit() {
    this.menuItems = Menu.menu;
    console.log(this.menuItems);

    this.role = sessionStorage.getItem('role');
  }
}
