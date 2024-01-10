import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { OrgInfoComponent } from './org-info/org-info.component';
import { ArchiveCategoryComponent } from './archive-category/archive-category.component';
import { ArchiveDataComponent } from './archive-data/archive-data.component';
import { SysInfoComponent } from './sys-info/sys-info.component';

const routes: Routes = [
  {
    path: 'user-manager',
    component: UserManagerComponent,
  },
  {
    path: 'org-info',
    component: OrgInfoComponent,
  },
  {
    path: 'archive-category',
    component: ArchiveCategoryComponent,
  },
  {
    path: 'archive-data',
    component: ArchiveDataComponent,
  },
  {
    path: 'sys-info',
    component: SysInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagerRoutingModule { }
