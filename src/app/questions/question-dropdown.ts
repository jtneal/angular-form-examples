import { KeyValue } from '@angular/common';

import { QuestionBase } from './question-base';
import { DropdownOptions } from './options';

export class DropdownQuestion extends QuestionBase<string> {
  public controlType = 'dropdown';
  public options: KeyValue<string, string>[] = [];

  public constructor(options: DropdownOptions<string> = {}) {
    super(options);
    this.options = options.options || [];
  }
}
