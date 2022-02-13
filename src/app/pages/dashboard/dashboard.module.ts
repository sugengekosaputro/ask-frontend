import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWrapperComponent } from './layout-wrapper/layout-wrapper.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserEditComponent } from './user-edit/user-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutWrapperComponent,
    RoleComponent,
    UserComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
