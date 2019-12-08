import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  public constructor() { }

  public toFormGroup(questions: QuestionBase<any>[], customValidators: ValidatorFn[]) {
    const group: any = {};

    questions.forEach((question) => {
      group[question.key] = new FormControl(question.value || '', question.validators);
    });

    return new FormGroup(group, customValidators);
  }
}
