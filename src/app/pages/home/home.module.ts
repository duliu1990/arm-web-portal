import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCardModule } from 'ng-zorro-antd/card';
import { MyMsgComponent } from './my-msg/my-msg.component';
import { MyNotificationComponent } from './my-notification/my-notification.component';
import { ArmSearchComponent } from './arm-search/arm-search.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    HomeComponent,
    MyMsgComponent,
    MyNotificationComponent,
    ArmSearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzAvatarModule,
    NzPopoverModule,
    NzCardModule,
    NzGridModule,
    NzListModule,
    NzTableModule
  ]
})
export class HomeModule { }
