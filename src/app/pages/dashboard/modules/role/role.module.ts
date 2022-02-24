import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { RoleComponent } from './role/role.component';
import { RoleFormComponent } from './role-form/role-form.component';

const components = [
  RoleComponent,
  RoleFormComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  exports: [components]
})
export class RoleModule { }
