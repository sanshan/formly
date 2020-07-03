import {Component} from "@angular/core";
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'formly-list-type',
  template: `
    <mat-label *ngIf="to.label">{{ to.label | translate }}</mat-label>
    <mat-select [formControl]="formControl" [formlyAttributes]="field"
                (selectionChange)="to.change && to.change(field, formControl)">
      <ng-container *ngFor="let item of to.options">
        <mat-option [value]="item.value">{{ item.label }}</mat-option>
      </ng-container>
    </mat-select>
  `,
})

export class ListTypeComponent extends FieldType {
}
