import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { UserManagerRoutingModule } from './sys-manager-routing.module';



@NgModule({
  declarations: [
    UserManagerComponent
  ],
  imports: [
    CommonModule,
    UserManagerRoutingModule
  ]
})
export class SysManagerModule { }
