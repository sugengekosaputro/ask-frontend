import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiklatFormComponent } from './modules/diklat/diklat-form/diklat-form.component';
import { DiklatComponent } from './modules/diklat/diklat/diklat.component';
import { InstansiFormComponent } from './modules/instansi/instansi-form/instansi-form.component';
import { InstansiComponent } from './modules/instansi/instansi/instansi.component';
import { LayananFormComponent } from './modules/layanan/layanan-form/layanan-form.component';
import { LayananComponent } from './modules/layanan/layanan/layanan.component';
import { MemberTypeFormComponent } from './modules/member-type/member-type-form/member-type-form.component';
import { MemberTypeComponent } from './modules/member-type/member-type/member-type.component';
import { MemberFormComponent } from './modules/member/member-form/member-form.component';
import { MemberComponent } from './modules/member/member/member.component';
import { RoleFormComponent } from './modules/role/role-form/role-form.component';
import { RoleComponent } from './modules/role/role/role.component';
import { UserEditComponent } from './modules/user/user-edit/user-edit.component';
import { UserComponent } from './modules/user/user/user.component';

const routes: Routes = [
  {
  path: '',
  children: [
    {
      path: 'user',
      component: UserComponent,
    },
    {
      path: 'user/form',
      component: UserEditComponent
    },
    {
      path: 'user/form/:id',
      component: UserEditComponent
    },
    {
      path: 'role',
      component: RoleComponent,
    },
    {
      path: 'role/form',
      component: RoleFormComponent
    },
    {
      path: 'role/form/:id',
      component: RoleFormComponent
    },
    {
      path: 'member',
      component: MemberComponent,
    },
    {
      path: 'member/form',
      component: MemberFormComponent
    },
    {
      path: 'member/form/:id',
      component: MemberFormComponent
    },
    {
      path: 'member-type',
      component: MemberTypeComponent,
    },
    {
      path: 'member-type/form',
      component: MemberTypeFormComponent
    },
    {
      path: 'member-type/form/:id',
      component: MemberTypeFormComponent
    },
    {
      path: 'layanan',
      component: LayananComponent,
    },
    {
      path: 'layanan/form',
      component: LayananFormComponent
    },
    {
      path: 'layanan/form/:id',
      component: LayananFormComponent
    },
    {
      path: 'instansi',
      component: InstansiComponent,
    },
    {
      path: 'instansi/form',
      component: InstansiFormComponent
    },
    {
      path: 'instansi/form/:id',
      component: InstansiFormComponent
    },
    {
      path: 'diklat',
      component: DiklatComponent,
    },
    {
      path: 'diklat/form',
      component: DiklatFormComponent
    },
    {
      path: 'diklat/form/:id',
      component: DiklatFormComponent
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
