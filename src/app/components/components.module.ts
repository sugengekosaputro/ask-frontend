import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

let components: any = [
  SidebarComponent,
  NavbarComponent
];

@NgModule({
  declarations: [
    components
  ],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    components
  ]
})
export class ComponentsModule { }
