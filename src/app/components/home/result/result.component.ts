import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  questions: any = [];
  totalQuestons: number;
  answeredQuestions: any = [];
  unAnsweredQuestions: number;
  counter: any = 0;
  questionsindexData: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.questions = JSON.parse(localStorage.getItem('formData'));
    this.questionsindexData = JSON.parse(localStorage.getItem('questionIndex'));
    console.log('this.questionsindexData', this.questionsindexData);
    this.totalQuestons = this.questions && this.questions.length ? this.questions.length : 0;
    if (this.questions && this.questions.length) {
      this.questions.map(qData => qData.answers.map(adata => (adata.isSelected === true ? this.answeredQuestions.push(adata) : [])));
      this.unAnsweredQuestions = this.questions.length - this.answeredQuestions.length;
      this.questions.map(data1 => data1.answers.map(data2 => (data2.isSelected === true && data2.correctAns === true ? (this.counter = this.counter + 1) : 0)))
    }
    localStorage.removeItem('formData');
    localStorage.removeItem('questionIndex');
    if (!this.questions) {
      this.router.navigate(['/home']);
    }
  }

  getAnswer(answerData) {
    for (var i = 0; i < answerData.length; i++) {
      if (answerData[i].isSelected === true) {
        return answerData[i].option;
      }
    }

    for (var i = 0; i < answerData.length; i++) {
      if (answerData[i].isSelected === false) {
        return '(Not Answered)';
      }
    }
  }

  getCorrectAnswer(answerData) {
    for (var i = 0; i < answerData.length; i++) {
      if (answerData[i].correctAns === true) {
        return answerData[i].option;
      }
    }
  }
}
