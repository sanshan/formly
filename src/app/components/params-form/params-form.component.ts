import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output, ViewChild
} from '@angular/core';
import {AbstractControl, FormArray, FormGroup} from '@angular/forms';
import {FormlyFormOptions} from "@ngx-formly/core";
import {Config, Model, TabType} from 'src/app/model/interfaces';
import * as cloneDeep from 'lodash.clonedeep';
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'app-params-form',
  template: `
    <form class="params-form" [ngClass]="labelsWidth" [formGroup]="form" (ngSubmit)="onSubmit(model)">
      <mat-tab-group
        [disablePagination]="true"
        [selectedIndex]="1"
        (selectedTabChange)="tabChange($event)"
        animationDuration="0ms"
      >
        <mat-tab [disabled]="true">
          <ng-template class="tabs-resize" mat-tab-label>
            <mat-icon (click)="toggleLabelsWidth($event)" svgIcon="arrow-split-vertical" matTooltip="Открыть / Свернуть"></mat-icon>&nbsp;
          </ng-template>
        </mat-tab>
        <mat-tab *ngFor="let tab of tabs;let index = index;">
          <ng-template mat-tab-label>
            <mat-icon svgIcon="{{ tab.icon }}" matTooltip="{{ tab.description }}"></mat-icon>&nbsp;
            {{ tab.label }}
          </ng-template>
          <formly-form
            [form]="castFormGroup(form.at(index))"
            [model]="model"
            [fields]="tab.fields"
            [options]="options[index]"
          >
          </formly-form>
        </mat-tab>
      </mat-tab-group>
      <button type="submit" mat-button color="primary">Сохранить</button>
    </form>
  `,
  styleUrls: ['./params-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParamsFormComponent implements OnChanges, AfterViewInit {

  @Input() config: Config;
  @Output() modelChanged: EventEmitter<Model> = new EventEmitter<Model>();

  form: FormArray;
  tabs: TabType[];
  options = {};
  model: Model;

  labelsWidth: 'short' | 'full' = 'short'

  private _ink: any;

  constructor(private elRef: ElementRef) {
  }

  ngOnChanges(): void {
    this.form = new FormArray(this.config.tabs.map(() => new FormGroup({})));
    this.options = this.config.tabs.map(() => <FormlyFormOptions>{});
    this.tabs = cloneDeep(this.config.tabs);

    this.model = {...this.config.model};
  }

  ngAfterViewInit() {
    this._ink = this.elRef.nativeElement.querySelector('.mat-ink-bar');
    this._ink.classList.add('vertical');
    this.tabChange({index: 1, tab: null});
  }

  onSubmit(model) {
    this.modelChanged.emit(model);
  }

  castFormGroup(value: AbstractControl): FormGroup {
    return value as FormGroup;
  }

  tabChange(e: MatTabChangeEvent) {
    const btn = this.elRef.nativeElement
      .querySelectorAll('.mat-tab-label')[e.index];
    const top = btn.offsetTop;// + btn.offsetHeight;
    this._ink.style.top = `${top}px`
    this._ink.style.height = `${btn.offsetHeight}px`
  }

  toggleLabelsWidth(e) {
    e.preventDefault();
    this.labelsWidth = this.labelsWidth === 'short' ? 'full' : 'short'
  }

}
