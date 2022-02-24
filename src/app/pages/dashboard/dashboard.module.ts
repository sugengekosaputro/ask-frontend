import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutWrapperComponent } from './layout-wrapper/layout-wrapper.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { DiklatModule } from './modules/diklat/diklat.module';
import { InstansiModule } from './modules/instansi/instansi.module';
import { LayananModule } from './modules/layanan/layanan.module';
import { MemberModule } from './modules/member/member.module';
import { MemberTypeModule } from './modules/member-type/member-type.module';

@NgModule({
  declarations: [
    LayoutWrapperComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    UserModule,
    RoleModule,
    DiklatModule,
    InstansiModule,
    LayananModule,
    MemberModule,
    MemberTypeModule
  ]
})
export class DashboardModule { }
