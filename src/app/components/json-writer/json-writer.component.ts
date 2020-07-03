import {ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild, Input} from '@angular/core';
import {FormlyFieldConfig} from "@ngx-formly/core";
import {JsonEditorComponent, JsonEditorOptions} from 'ang-jsoneditor';
import {Schema} from "../../model/interfaces";

@Component({
  selector: 'app-json-writer',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>JSON for Form</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <json-editor [options]="editorOptions" [data]="schema" (jsonChange)="getData($event)"></json-editor>
      </mat-card-content>
      <mat-card-actions>
        <button (click)="onGenerate()" mat-button>GENERATE</button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./json-writer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JsonWriterComponent {
  @Input() schema: Schema;
  @Output() change: EventEmitter<FormlyFieldConfig[]> = new EventEmitter<FormlyFieldConfig[]>();
  @ViewChild(JsonEditorComponent, {static: false}) editor: JsonEditorComponent;

  response: any;

  public editorOptions: JsonEditorOptions;

  constructor() {
    this.editorOptions = new JsonEditorOptions()
    this.editorOptions.modes = ['tree', 'view'];

  }

  getData(event) {
    console.log('getData: ', event);
    if (!(event instanceof Event)) {
      this.response = event
    }
  }

  onGenerate() {
    this.change.emit(this.response)
  }

}
