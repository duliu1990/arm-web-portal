import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalCenterComponent } from './personal-center.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalMsgComponent } from './personal-msg/personal-msg.component';
import { PersonalSysMsgComponent } from './personal-sys-msg/personal-sys-msg.component';
import { PersonalPasswordComponent } from './personal-password/personal-password.component';
import { PersonalLogComponent } from './personal-log/personal-log.component';

const routes: Routes = [
  { path: '', component: PersonalCenterComponent },
  {
    path: 'info',
    component: PersonalInfoComponent
  },
  {
    path: 'msg',
    component: PersonalMsgComponent
  },
  {
    path: 'sys-msg',
    component: PersonalSysMsgComponent
  },
  {
    path: 'password',
    component: PersonalPasswordComponent
  },
  {
    path: 'log',
    component: PersonalLogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalCenterRoutingModule { }
