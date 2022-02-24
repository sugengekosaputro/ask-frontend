import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstansiComponent } from './instansi/instansi.component';
import { InstansiFormComponent } from './instansi-form/instansi-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InstansiComponent,
    InstansiFormComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  exports: [
    InstansiComponent,
    InstansiFormComponent
  ]
})
export class InstansiModule { }
