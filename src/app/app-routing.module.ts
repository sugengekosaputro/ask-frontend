import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardGuard } from './guards/dashboard.guard';
import { LayoutWrapperComponent } from './pages/dashboard/layout-wrapper/layout-wrapper.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/sign-in',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('../../src/app/pages/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '',
    component: LayoutWrapperComponent,
    children: [
      {
        path: 'dashboard',
        canActivate: [DashboardGuard],
        loadChildren: () => import('../../src/app/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
