import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from 'src/app/guards/dashboard.guard';
import { LayoutWrapperComponent } from './layout-wrapper/layout-wrapper.component';
import { RoleComponent } from './role/role.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
  path: '',
  children: [
    {
      path: 'role',
      component: RoleComponent,
    },
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
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
