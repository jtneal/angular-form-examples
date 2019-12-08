import { Component, OnInit, Input } from '@angular/core';
import { QuestionControlService } from '../questions/question-control.service';
import { QuestionBase } from '../questions/question-base';
import { FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() public questions: QuestionBase<any>[] = [];
  @Input() public validators: ValidatorFn[] = [];
  public form: FormGroup;
  public payLoad = '';

  public constructor(private qcs: QuestionControlService) { }

  public ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions, this.validators);
  }

  public onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  public getErrors() {
    return Object.values(this.form.errors || {});
  }
}
