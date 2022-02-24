import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ROUTES } from './sidebar-routes.config';
import * as $ from 'jquery';
import { RolesService } from 'src/app/services/roles/roles.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems: any[] | undefined;
  
  constructor(public sidebarservice: SidebarService, private roleService: RolesService) { }

  ngOnInit(): void {
    $.getScript('./assets/js/app-sidebar.js');
    this.getMenuByRole();
  }

  getMenuByRole(){
    if(localStorage.getItem('roleId')) {
      let id = localStorage.getItem('roleId')!;
      this.roleService.getDataById(+id).subscribe((res: any) => {
        if (res) {
          this.menuItems = res.menus;
        }
      });
    };
  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());

  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }
}
