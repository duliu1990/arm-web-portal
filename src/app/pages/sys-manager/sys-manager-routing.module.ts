import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { OrgInfoComponent } from './org-info/org-info.component';
import { QuanzongManagerComponent } from './quanzong-manager/quanzong-manager.component';
import { ArchiveCategoryComponent } from './archive-category/archive-category.component';

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
    path: 'qz-manager',
    component: QuanzongManagerComponent,
  },
  {
    path: 'archive-category',
    component: ArchiveCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagerRoutingModule { }
