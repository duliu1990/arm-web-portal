import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiechartComponent } from './piechart.component';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';


@NgModule({
  declarations: [PiechartComponent],
  imports: [
    CommonModule,
    NgxEchartsDirective
  ],
  providers: [
    provideEcharts(),
  ],
  exports: [PiechartComponent]
})
export class EchartsModule { }
