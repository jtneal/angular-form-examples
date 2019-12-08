import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../questions/question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() public question: QuestionBase<any>;
  @Input() public form: FormGroup;

  public get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  public get errors() {
    return this.form.controls[this.question.key].errors;
  }

  public getCustomErrors() {
    return Object.values(this.errors || {}).filter((value) => value !== true);
  }
}
