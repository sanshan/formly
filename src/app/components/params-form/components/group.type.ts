import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'formly-group-type',
  template: `
    <div class="mb-3">
      <legend *ngIf="to.label">{{ to.label }}</legend>
      {{ field | json}}
      <p *ngIf="to.description">{{ to.description }}</p>
      <div class="alert alert-danger" role="alert" *ngIf="showError && formControl.errors">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
      <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
    </div>
  `,
})
export class GroupTypeComponent extends FieldType {
}
