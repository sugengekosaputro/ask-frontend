import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayananComponent } from './layanan/layanan.component';
import { LayananFormComponent } from './layanan-form/layanan-form.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayananComponent,
    LayananFormComponent
  ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ReactiveFormsModule
  ],
  exports: [
    LayananComponent,
    LayananFormComponent
  ]
})
export class LayananModule { }
