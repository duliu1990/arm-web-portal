import { Component, ElementRef, OnInit } from "@angular/core";
import { EChartsOption } from 'echarts';

@Component({
    selector: 'pie-chart',
    template: `<div echarts [options]="option"></div>`,
    styles: ['']
})
export class PiechartComponent implements OnInit {

    option: EChartsOption = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: '科技档案' },
                    { value: 735, name: '文书档案' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    constructor(private elm: ElementRef) { }


    ngOnInit() {
        
    }
}