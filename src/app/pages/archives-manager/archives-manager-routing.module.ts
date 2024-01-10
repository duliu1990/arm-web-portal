import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivesManagerComponent } from './archives-manager.component';

const routes: Routes = [
  {
    path: '', component: ArchivesManagerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchivesManagerRoutingModule { }
