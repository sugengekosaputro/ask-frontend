import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiklatComponent } from './diklat/diklat.component';
import { DiklatFormComponent } from './diklat-form/diklat-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DiklatComponent,
    DiklatFormComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  exports: [
    DiklatComponent,
    DiklatFormComponent
  ]
})
export class DiklatModule { }
