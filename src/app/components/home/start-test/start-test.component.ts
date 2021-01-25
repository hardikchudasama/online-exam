import { JsonPipe } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.scss']
})
export class StartTestComponent implements OnInit {
  @ViewChildren('formRow') rows: ElementRef;

  examForm: FormGroup;
  questionsindexData: any = [{
    id: 1,
    isSelectedIndex: false
  },
  {
    id: 2,
    isSelectedIndex: false
  },
  {
    id: 3,
    isSelectedIndex: false
  },
  {
    id: 4,
    isSelectedIndex: false
  },
  {
    id: 5,
    isSelectedIndex: false
  },
  {
    id: 6,
    isSelectedIndex: false
  },
  {
    id: 7,
    isSelectedIndex: false
  },
  {
    id: 8,
    isSelectedIndex: false
  },
  {
    id: 9,
    isSelectedIndex: false
  },
  {
    id: 10,
    isSelectedIndex: false
  }]




  questions: any = [
    {
      qId: 1,
      qName:
        "The least multiple of 7, which leaves a remainder of 4, when divided by 6, 9, 15 and 18 is:",
      answers: [
        {
          aId: 1,
          option: 'A.',
          aName: "74",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 2,
          option: 'B.',
          aName: "94",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 3,
          option: 'C.',
          aName: "184",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 4,
          option: 'D.',
          aName: "364",
          isSelected: false,
          correctAns: true
        }
      ]
    },
    {
      qId: 2,
      qName:
        "The greatest number which on dividing 1657 and 2037 leaves remainders 6 and 5 respectively, is:",
      answers: [
        {
          aId: 1,
          option: 'A.',
          aName: "123",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 2,
          option: 'B.',
          aName: "127",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 3,
          option: 'C.',
          aName: "235",
          isSelected: false,
          correctAns: true
        },
        {
          aId: 4,
          option: 'D.',
          aName: "305",
          isSelected: false,
          correctAns: false
        }
      ]
    },
    {
      qId: 3,
      qName:
        "Seats for Mathematics, Physics and Biology in a school are in the ratio 5 : 7 : 8. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the ratio of increased seats?",
      answers: [
        {
          aId: 1,
          option: 'A.',
          aName: "2 : 3 : 4",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 2,
          option: 'B.',
          aName: "6 : 7 : 8",
          isSelected: false,
          correctAns: true
        },
        {
          aId: 3,
          option: 'C.',
          aName: "6 : 8 : 9",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 4,
          option: 'D.',
          aName: "None of these",
          isSelected: false,
          correctAns: false
        }
      ]
    },
    {
      qId: 4,
      qName:
        "If a quarter kg of potato costs 60 paise, how many paise will 200 gm cost?",
      answers: [
        {
          aId: 1,
          option: 'A.',
          aName: "48 paise",
          isSelected: false,
          correctAns: true
        },
        {
          aId: 2,
          option: 'B.',
          aName: "54 paise",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 3,
          option: 'C.',
          aName: "56 paise",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 4,
          option: 'D.',
          aName: "72 paise",
          isSelected: false,
          correctAns: false
        }
      ]
    },
    {
      qId: 5,
      qName:
        "Sakshi can do a piece of work in 20 days. Tanya is 25% more efficient than Sakshi. The number of days taken by Tanya to do the same piece of work is:",
      answers: [
        {
          aId: 1,
          option: 'A.',
          aName: "15",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 2,
          option: 'B.',
          aName: "16",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 3,
          option: 'C.',
          aName: "18",
          isSelected: false,
          correctAns: true
        },
        {
          aId: 4,
          option: 'D.',
          aName: "25",
          isSelected: false,
          correctAns: false
        }
      ]
    },
    {
      qId: 6,
      qName:
        "A train 125 m long passes a man, running at 5 km/hr in the same direction in which the train is going, in 10 seconds. The speed of the train is:",
      answers: [
        {
          aId: 1,
          option: 'A.',
          aName: "45 km/hr",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 2,
          option: 'B.',
          aName: "50 km/hr",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 3,
          option: 'C.',
          aName: "54 km/hr",
          isSelected: false,
          correctAns: true
        },
        {
          aId: 4,
          option: 'D.',
          aName: "55 km/hr",
          isSelected: false,
          correctAns: false
        }
      ]
    },
    {
      qId: 7,
      qName:
        "Two trains, each 100 m long, moving in opposite directions, cross each other in 8 seconds. If one is moving twice as fast the other, then the speed of the faster train is:",
      answers: [
        {
          aId: 1,
          option: 'A.',
          aName: "30 km/hr",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 2,
          option: 'B.',
          aName: "45 km/hr",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 3,
          option: 'C.',
          aName: "60 km/hr",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 4,
          option: 'D.',
          aName: "75 km/hr",
          isSelected: false,
          correctAns: true
        }
      ]
    },
    {
      qId: 8,
      qName:
        "A sum of Rs. 12,500 amounts to Rs. 15,500 in 4 years at the rate of simple interest. What is the rate of interest?",
      answers: [
        {
          aId: 1,
          option: 'A.',
          aName: "3%",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 2,
          option: 'B.',
          aName: "4%",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 3,
          option: 'C.',
          aName: "5%",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 4,
          option: 'D.',
          aName: "6%",
          isSelected: false,
          correctAns: true
        }
      ]
    },
    {
      qId: 9,
      qName:
        "The banker's gain on a bill due 1 year hence at 12% per annum is Rs. 6. The true discount is:",
      answers: [
        {
          aId: 1,
          option: 'A.',
          aName: "Rs. 72",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 2,
          option: 'B.',
          aName: "Rs. 36",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 3,
          option: 'C.',
          aName: "Rs. 54",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 4,
          option: 'D.',
          aName: "Rs. 50",
          isSelected: false,
          correctAns: true
        }
      ]
    },
    {
      qId: 10,
      qName:
        "Find out the wrong number in the given sequence of numbers. 25, 36, 49, 81, 121, 169, 225",
      answers: [
        {
          aId: 1,
          option: 'A.',
          aName: "36",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 2,
          option: 'B.',
          aName: "49",
          isSelected: false,
          correctAns: false
        },
        {
          aId: 3,
          option: 'C.',
          aName: "121",
          isSelected: false,
          correctAns: true
        },
        {
          aId: 4,
          option: 'D.',
          aName: "169",
          isSelected: false,
          correctAns: false
        }
      ]
    }
  ];
  questionsArr: any = [];
  totalQuestons: any;
  unAnsweredQuestions: number;
  questionArr: any = [];
  attendedAnswer: number;
  selectedIndex: any;
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.examForm = this.fb.group({
      answers: ['']
    })
  }

  handleEvent(event) {
    if (event.left === 0) {
      alert('Your time is up! \n Let"s see the Result and Statistics of the test');
      this.router.navigate(['/login'])
    }
  }

  selectedAnswer(questionData, ansData) {
    this.questionsindexData.map(data => data.id === questionData.qId ? data.isSelectedIndex = true : '');
    this.questions.filter(d1 => d1.qId === questionData.qId)[0].answers.filter(d2 => d2.aId === ansData.aId ? d2.isSelected = true : d2.isSelected = false);
  }

  submitTest() {
    localStorage.setItem("formData", JSON.stringify(this.questions));
    this.questionArr = JSON.parse(localStorage.getItem('formData'));
    if (this.questionArr && this.questionArr.length) {
      this.attendedAnswer = this.questionArr.map(data => data.answers.filter(data2 => data2.isSelected === true)).filter(data => data.length).length;
      this.unAnsweredQuestions = this.questionArr.length - this.attendedAnswer;
    }
    if (confirm('Total number of unanswerd questions = ' + this.unAnsweredQuestions + '\n \n Are you sure you want to submit test now?')) {
      this.router.navigate(['/home/result']);
    } else {
      console.log("submitted !");
    }
  }

  focusOnInput() {
    this.rows['last']['nativeElement'].focus();
  }

  clearAnswer(questionData) {
    console.log('questionData', questionData);
  }
}
