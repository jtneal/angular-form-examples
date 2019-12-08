import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';
import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion } from './question-textbox';
import { ValidatorFn, FormGroup, ValidationErrors, Validators, AbstractControl } from '@angular/forms';

@Injectable()
export class QuestionService {
  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  public getQuestions() {
    const questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        order: 1,
        validators: [Validators.required]
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        validators: [Validators.email, emailNotExampleEmail, emailRequiredIfBraveSolid]
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}

/* these could easily be pulled in from another file */

export const emailRequiredIfBraveSolid: ValidatorFn = (email: AbstractControl): ValidationErrors | null => {
  const brave = email.root.get('brave');

  if (!brave) {
    return null;
  }

  brave.valueChanges.subscribe(() => email.updateValueAndValidity());

  return brave.value === 'solid' && !email.value
    ? { emailRequired: 'is required if bravery is solid.' }
    : null;
};

export const emailNotExampleEmail: ValidatorFn = (email: AbstractControl): ValidationErrors | null => {
  return email.value.includes('@example.com')
    ? { realEmail: 'must not be an example email.' }
    : null;
};

/* these were used for form-level validators */

export const requiredIfBraveSolid: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const brave = control.get('brave');
  const email = control.get('emailAddress');

  return brave && brave.value === 'solid' && email && !email.value
    ? { emailRequired: 'Email is required if bravery is solid.' }
    : null;
};

export const notExampleEmail: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const email = control.get('emailAddress');

  return email && email.value.includes('@example.com')
    ? { realEmail: 'You must provide a real email address.' }
    : null;
};
