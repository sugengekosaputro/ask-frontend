import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  UserComponent,
  UserEditComponent
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
export class UserModule { }
