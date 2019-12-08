import { KeyValue } from '@angular/common';
import { ValidatorFn } from '@angular/forms';

export interface Options<T> {
  value?: T;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
  validators?: ValidatorFn[];
}

export interface TextboxOptions<T> extends Options<T> {
  type?: string;
}

export interface DropdownOptions<T> extends Options<T> {
  options?: KeyValue<string, string>[];
}
