import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'personal-center',
        loadChildren: () => import('src/app/pages/personal-center/personal-center.module').then(m => m.PersonalCenterModule)
      },
      {
        path: 'sys-manager',
        loadChildren: () => import('src/app/pages/sys-manager/sys-manager.module').then(m => m.SysManagerModule)
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
