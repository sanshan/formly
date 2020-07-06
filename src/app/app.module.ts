import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FORMLY_CONFIG, FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {JsonWriterComponent} from './components/json-writer/json-writer.component';
import {ParamsFormComponent} from './components/params-form/params-form.component';
import {NgJsonEditorModule} from "ang-jsoneditor";
import {ChartComponent} from './components/chart/chart.component';
import {ObjectTypeComponent} from "./components/params-form/components/object.type";
import {ArrayTypeComponent} from "./components/params-form/components/array.type";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {registerTranslateExtension} from "./services/translate.extension";
import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from "@angular/material/select";
import {PositionTypeComponent} from "./components/params-form/components/position.type";
import {GroupTypeComponent} from "./components/params-form/components/group.type";
import {MatListModule} from "@angular/material/list";
import {FlexModule} from "@angular/flex-layout";
import {MatTabsModule} from '@angular/material/tabs';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    JsonWriterComponent,
    ParamsFormComponent,
    ChartComponent,
    ObjectTypeComponent,
    ArrayTypeComponent,
    PositionTypeComponent,
    GroupTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormlyModule.forRoot({
      types: [
        {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            templateOptions: {
              type: 'number',
            },
          },
        },
        {name: 'string', extends: 'input'},
        {name: 'object', component: ObjectTypeComponent},
        {
          name: 'group',
          extends: 'object',
          component: GroupTypeComponent
        },
        {name: 'array', component: ArrayTypeComponent},
        {name: 'boolean', extends: 'checkbox'},
        {
          name: 'enum', extends: 'select'
        },
        {
          name: 'position',
          extends: 'select',
          defaultOptions: {
            templateOptions: {
              options: [
                {value: 'top', label: 'Верх'},
                {value: 'right', label: 'Право'},
                {value: 'bottom', label: 'Низ'},
                {value: 'left', label: 'Лево'},
              ]
            }
          }
        },
        {
          name: 'h-align',
          extends: 'select',
          defaultOptions: {
            templateOptions: {
              options: [
                {value: 'right', label: 'Право'},
                {value: 'center', label: 'Центр'},
                {value: 'left', label: 'Лево'},
              ]
            }
          }
        },
        {
          name: 'v-align',
          extends: 'select',
          defaultOptions: {
            templateOptions: {
              options: [
                {value: 'top', label: 'Верх'},
                {value: 'middle', label: 'Середина'},
                {value: 'bottom', label: 'Низ'}
              ]
            }
          }
        },
        {
          name: 'numberFormat',
          extends: 'select',
          defaultOptions: {
            templateOptions: {
              options: [
                {value: '#.', label: 'Без'},
                {value: '#.#', label: '.0'},
                {value: '#.00', label: '.00'},
                {value: '#.%', label: '%'}
              ]
            }
          }
        },
      ]
    }),
    FormlyMaterialModule,
    MatSidenavModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgJsonEditorModule,
    MatSelectModule,
    FlexModule,
    MatTabsModule
  ],
  providers: [
    {provide: FORMLY_CONFIG, multi: true, useFactory: registerTranslateExtension, deps: [TranslateService]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../assets/mdi.svg'));
  }
}
