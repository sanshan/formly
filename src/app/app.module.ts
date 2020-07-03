import {BrowserModule} from '@angular/platform-browser';
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
import {MatIconModule} from "@angular/material/icon";
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
import {ListTypeComponent} from "./components/params-form/components/baseSelect.type";
import {MatSelectModule} from "@angular/material/select";

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
    ListTypeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
        {name: 'array', component: ArrayTypeComponent},
        {name: 'boolean', extends: 'checkbox'},
        {name: 'enum', extends: 'select'},
        {name: 'list', component: ListTypeComponent},
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
    MatSelectModule
  ],
  providers: [
    {provide: FORMLY_CONFIG, multi: true, useFactory: registerTranslateExtension, deps: [TranslateService]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
