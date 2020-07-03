import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from "@ngx-formly/core";
import {Config, Model} from 'src/app/model/interfaces';
import {FormlyJsonschema} from "@ngx-formly/core/json-schema";

@Component({
  selector: 'app-params-form',
  template: `
    <form *ngIf="fields" class="params-form" [formGroup]="form" (ngSubmit)="onSubmit(model)">
      <formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>
      <button type="submit" class="submit btn btn-default">Submit</button>
    </form>
  `,
  styleUrls: ['./params-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParamsFormComponent implements OnChanges {

  @Input() config: Config;
  @Output() modelChanged: EventEmitter<Model> = new EventEmitter<Model>();

  form = new FormGroup({});
  options = {};
  fields: FormlyFieldConfig[];
  model: Model;


  constructor(private formlyJSONschema: FormlyJsonschema,) {
  }

  ngOnChanges(): void {
    this.fields = [this.formlyJSONschema.toFieldConfig(this.config.schema)];
    this.model = this.config.model;
  }

  onSubmit(model) {
    this.modelChanged.emit(model);
  }

}
