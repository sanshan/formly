import {FormlyFieldConfig} from "@ngx-formly/core";

export interface TabType {
  label: string;
  icon: string;
  description: string;
  fields: FormlyFieldConfig[];
}

export interface Config {
  tabs: TabType[];
  model: Model;
}

type Position = 'top' | 'right' | 'bottom' | 'left';
type Align = 'right' | 'center' | 'left';
type vAlign = 'top' | 'middle' | 'bottom';
type SeriesType = 'PieSeries' | 'LineSeries';

interface Legend {
  disabled: boolean;
  position: Position;
  contentAlign: Align;
  valign: vAlign;
}

interface Series<T = SeriesType> {
  type: T;
  dataFields: {
    valueY?: string;
    value?: string;
    category?: string;
    categoryX?: string;
  }
}

interface Title {
  text: string;
  marginBottom?: string;
  align?: Align;
}

export interface Model {
  data: any;
  titles: Title[];
  legend: Legend;
  series: Series[];
  numberFormatter: {
    numberFormat: string;
  };
  innerRadius: number;
}
