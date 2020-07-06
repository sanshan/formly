import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/material/form-field';

@Component({
  selector: 'formly-position-type',
  template: `
    <mat-select [formControl]="formControl" [formlyAttributes]="field"
                (selectionChange)="to.change && to.change(field, formControl)">
      <ng-container *ngFor="let item of to.options">
        <mat-option [value]="item.value">{{ item.label }}</mat-option>
      </ng-container>
    </mat-select>
  `,
})

export class PositionTypeComponent extends FieldType {
}
