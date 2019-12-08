import { Component } from '@angular/core';

import { QuestionService, requiredIfBraveSolid, notExampleEmail } from './questions/question.service';
import { ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuestionService]
})
export class AppComponent {
  questions: any[];
  validators: ValidatorFn[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
    this.validators = [requiredIfBraveSolid, notExampleEmail];
  }
}
