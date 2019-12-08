import { KeyValue } from '@angular/common';

import { Options } from './options';
import { ValidatorFn } from '@angular/forms';

export class QuestionBase<T> {
  public value: T;
  public key: string;
  public label: string;
  public required: boolean;
  public order: number;
  public controlType: string;
  public validators: ValidatorFn[];

  public constructor(options: Options<T> = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.validators = options.validators || [];
  }
}
