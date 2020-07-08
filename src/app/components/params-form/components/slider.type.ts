import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/material';

@Component({
  selector: 'formly-field-mat-slider',
  styles: [
      `
      ::ng-deep .formly-slider-type .mat-slider-thumb-label {
        transform: rotate(45deg) !important;
        border-radius: 50% 50% 0 !important;
      }

      ::ng-deep .mat-slider-thumb {
        transform: scale(0) !important;
      }

      ::ng-deep .mat-slider-thumb-label-text {
        opacity: 1 !important;
      }

      .formly-slider-type .label-wrapper {
        display: flex;
        justify-content: left;
        padding: 5px;
        margin-bottom: 10px;
      }

      .formly-slider-type .label-wrapper .faq {
        flex: 1 40px;
        padding-left: 2px;
      }

      ::ng-deep .formly-slider-type .label-wrapper .faq mat-icon svg {
        height: 16px;
        width: 16px;
      }
      .formly-slider-type .slider-wrapper {
        display: flex;
        justify-content: center;
      }
      .formly-slider-type .slider {
        width: 94%
      }

    `
  ],
  template: `
    <div class="formly-slider-type">
      <div class="label-wrapper">
        <div class="label">{{ to.label }}</div>
        <div class="faq">
          <mat-icon svgIcon="comment-question-outline" matTooltip="{{ to.description }}"></mat-icon>
        </div>
      </div>
      <div class="slider-wrapper">
        <mat-slider class="slider"
                    [thumbLabel]="true"
                    [formControl]="formControl"
                    [formlyAttributes]="field"
                    [min]="to.min"
                    [max]="to.max"
                    [color]="to.color">
        </mat-slider>
      </div>
    </div>
  `,
})
export class FormlySliderTypeComponent extends FieldType {
}
