import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { UserManagerRoutingModule } from './sys-manager-routing.module';
import { OrgInfoComponent } from './org-info/org-info.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ArchiveCategoryComponent } from './archive-category/archive-category.component';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ArchiveDataComponent } from './archive-data/archive-data.component';
import { SysInfoComponent } from './sys-info/sys-info.component';

@NgModule({
  declarations: [
    UserManagerComponent,
    OrgInfoComponent,
    ArchiveCategoryComponent,
    ArchiveDataComponent,
    SysInfoComponent
  ],
  imports: [
    CommonModule,
    UserManagerRoutingModule,
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
    NzUploadModule
  ]
})
export class SysManagerModule { }
