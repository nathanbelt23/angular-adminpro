import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public menu: any = [];

  constructor(public menuService: MenuService) {
    this.menu = this.menuService.getMenu();
  }
  ngOnInit(): void {
  }

}
