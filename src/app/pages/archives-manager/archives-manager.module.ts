import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchivesManagerComponent } from './archives-manager.component';
import { ArchivesManagerRoutingModule } from './archives-manager-routing.module';



@NgModule({
  declarations: [
    ArchivesManagerComponent
  ],
  imports: [
    CommonModule,
    ArchivesManagerRoutingModule
  ]
})
export class ArchivesManagerModule { }
