import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@NgModule({
  imports: [
    DashboardRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
