import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalCenterComponent } from './personal-center.component';
import { PersonalCenterRoutingModule } from './personal-center-routing.module';
import { NzListModule } from 'ng-zorro-antd/list';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PersonalMsgComponent } from './personal-msg/personal-msg.component';
import { PersonalPasswordComponent } from './personal-password/personal-password.component';
import { PersonalSysMsgComponent } from './personal-sys-msg/personal-sys-msg.component';
import { PersonalLogComponent } from './personal-log/personal-log.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';


@NgModule({
  declarations: [
    PersonalCenterComponent,
    PersonalInfoComponent,
    PersonalMsgComponent,
    PersonalPasswordComponent,
    PersonalSysMsgComponent,
    PersonalLogComponent
  ],
  imports: [
    CommonModule,
    PersonalCenterRoutingModule,
    NzListModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzTableModule,
    NzGridModule,
    NzFormModule,
    NzPaginationModule,
    NzMenuModule,
    IconsProviderModule,
    NzDividerModule,
    NzModalModule,
    NzTreeModule,
    NzSpaceModule,
    NzUploadModule,
    NzBreadCrumbModule
  ]
})
export class PersonalCenterModule { }
