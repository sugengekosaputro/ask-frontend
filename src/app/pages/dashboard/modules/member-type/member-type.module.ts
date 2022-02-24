import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberTypeComponent } from './member-type/member-type.component';
import { MemberTypeFormComponent } from './member-type-form/member-type-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MemberTypeComponent,
    MemberTypeFormComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  exports: [
    MemberTypeComponent,
    MemberTypeFormComponent
  ]
})
export class MemberTypeModule { }
