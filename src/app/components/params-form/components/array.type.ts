import {Component} from '@angular/core';
import {FieldArrayType} from '@ngx-formly/core';

@Component({
  selector: 'formly-array-type',
  template: `
    <div class="formly-array-type">
      <div class="alert alert-danger" role="alert" *ngIf="showError && formControl.errors">
        <formly-validation-message [field]="field"></formly-validation-message>
      </div>
      <div *ngFor="let field of field.fieldGroup;let i = index;" class="row">
        <formly-field class="formly-field" [field]="field"></formly-field>
<!--        <div class="buttons">-->
<!--          <button (click)="remove(i)" mat-icon-button color="warn" aria-label="Удалить заголовок">-->
<!--            <mat-icon>delete</mat-icon>-->
<!--          </button>-->
<!--        </div>-->
      </div>

<!--      <div fxLayout="row">-->
<!--        <button (click)="add()" type="button" mat-icon-button color="primary" aria-label="Добавить заголовок">-->
<!--          <mat-icon>add</mat-icon>-->
<!--        </button>-->
<!--      </div>-->
    </div>
  `,
  styles: [
    `
        .formly-array-type {
          border: 1px solid #eee;
          padding: 5px 10px;
        }
        .formly-array-type .row {
          display: flex;
          justify-content: left;
          flex: 1;
        }
        .formly-array-type .row .buttons {
          flex: 1 40px
        }
        .formly-array-type .row .formly-field {
          width :100%;
        }
    `
  ]
})
export class ArrayTypeComponent extends FieldArrayType {
}
