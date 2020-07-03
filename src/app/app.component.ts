import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Config, Model} from './model/interfaces';
import {FormlyFieldConfig} from "@ngx-formly/core";
import {CHART_CONFIG} from "./model/chart/config";
import * as cloneDeep from 'lodash.clonedeep';
import { TranslateService } from '@ngx-translate/core';

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


    console.log(browserLang);
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'ru');
  }


  ngOnInit(): void {
    this.config = CHART_CONFIG;
    this.defaultSchema = CHART_CONFIG.schema;
  }

  onReceiveSchema(json: FormlyFieldConfig[]): void {
    console.log('onReceiveSchema: ', this.config);
    console.log('onReceiveSchema: ', json);

    this.config = {...this.config, schema: {...json}}
    console.log('onReceiveSchema: ', this.config);
  }

  onModelChange(model: Model): void {
    console.log('onModelChange: ', model);

    this.config = {...this.config, model: cloneDeep(model)}
  }

}
