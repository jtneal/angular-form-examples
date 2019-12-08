import { QuestionBase } from './question-base';
import { TextboxOptions } from './options';

export class TextboxQuestion extends QuestionBase<string> {
  public controlType = 'textbox';
  public type: string;

  public constructor(options: TextboxOptions<string> = {}) {
    super(options);
    this.type = options.type || '';
  }
}
