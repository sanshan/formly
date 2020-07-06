import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Config, Model} from './model/interfaces';
import {FormlyFieldConfig} from "@ngx-formly/core";
import {CHART_CONFIG} from "./model/chart/config";
import * as cloneDeep from 'lodash.clonedeep';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  config: Config;
  defaultSchema: any;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('ru');
    const browserLang = translate.getBrowserLang();

    translate.use(browserLang.match(/en|ru/) ? browserLang : 'ru');
  }


  ngOnInit(): void {
    this.config = CHART_CONFIG;
    this.defaultSchema = CHART_CONFIG.schema;
  }

  onReceiveSchema(json: FormlyFieldConfig[]): void {
    this.config = {...this.config, schema: {...json}}
  }

  onModelChange(model: Model): void {
    this.config = {...this.config, model: cloneDeep(model)}
  }

}
