import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCenterComponent } from './personal-center.component';
import { PersonalCenterRoutingModule } from './personal-center-routing.module';



@NgModule({
  declarations: [
    PersonalCenterComponent
  ],
  imports: [
    CommonModule,
    PersonalCenterRoutingModule
  ]
})
export class PersonalCenterModule { }
