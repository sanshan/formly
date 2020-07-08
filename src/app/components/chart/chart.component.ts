import {AfterViewInit, ChangeDetectionStrategy, Component, Input, NgZone, OnChanges, OnDestroy} from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import * as cloneDeep from 'lodash.clonedeep';
import {Model} from "../../model/interfaces";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-chart',
  template: `
    <div id="chartdiv" style="width: 100%; height: 60vh"></div>
  `,
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() config: Model;

  chart: am4charts.PieChart;

  constructor(private zone: NgZone) {
  }

  ngOnChanges(): void {
    console.log('ngOnChanges: ', this.config);

    if (this.chart) {
      // this.chart.config = cloneDeep(this.config);
      this.chart.dispose();
      this.chart = am4core.createFromConfig(cloneDeep(this.config), "chartdiv", am4charts.PieChart) as am4charts.PieChart;
    }

  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: ', this.config);

    this.zone.runOutsideAngular(() => {
      this.chart = am4core.createFromConfig(cloneDeep(this.config), "chartdiv", am4charts.PieChart) as am4charts.PieChart;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
