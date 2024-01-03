import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCenterComponent } from './personal-center.component';
import { PersonalCenterRoutingModule } from './personal-center-routing.module';
import { NzListModule } from 'ng-zorro-antd/list';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalMsgComponent } from './personal-msg/personal-msg.component';
import { PersonalPasswordComponent } from './personal-password/personal-password.component';
import { PersonalSysMsgComponent } from './personal-sys-msg/personal-sys-msg.component';


@NgModule({
  declarations: [
    PersonalCenterComponent,
    PersonalInfoComponent,
    PersonalMsgComponent,
    PersonalPasswordComponent,
    PersonalSysMsgComponent
  ],
  imports: [
    CommonModule,
    PersonalCenterRoutingModule,
    NzListModule
  ]
})
export class PersonalCenterModule { }
