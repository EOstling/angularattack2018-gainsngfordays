import { sample } from 'rxjs/internal/operators';
import { Injectable, OnInit } from '@angular/core';
import { MockImt } from '../MockImt';
import { Imt } from '../imt';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImtServiceService implements OnInit {
  IMTS: Imt[];

  private mock = new BehaviorSubject<any>([{'id': 1,
  'name': 'Knockout',
  'weight': 150,
  'time': new Date('05/1/2018'),
  'day': new Date('05/01/2018'),
  'notes': 'Stiff back but strong workout',
  'typeOfWorkout': [{'id': 1 , 'type': 'Strenth'}],
  'pB': 'Best of the Best'
},
{'id': 2,
  'name': 'Knockout',
  'weight': 195,
  'time': new Date('06/13/2018'),
  'day': new Date('06/13/2018'),
  'notes': 'Mock Note Data',
  'typeOfWorkout': [{'id': 1 , 'type': 'Strenth'}],
  'pB': 'started weak ended ok'
},
{'id': 3,
'name': 'Knockout',
  'weight': 289,
  'time': new Date('02/18/2018'),
  'day': new Date('02/18/2018'),
  'notes': 'Mock Note Data',
  'typeOfWorkout': [{'id': 1 , 'type': 'Strenth'}],
  'pB': 'Weak workout today no cokkie'
},
{'id': 4,
'name': 'Knockout',
  'weight': 183,
  'time': new Date('12/2/2018'),
  'day': new Date('12/2/2018'),
  'notes': 'Mock Note Data',
  'typeOfWorkout': [{'id': 1 , 'type': 'Strenth'}],
  'pB': 'Best 4'
},
{'id': 5,
'name': 'Knockout',
  'weight': 165,
  'time': new Date('02/04/2018'),
  'day': new Date('02/04/2018'),
  'notes': 'Mock Note Data',
  'typeOfWorkout': [{'id': 1 , 'type': 'Strenth'}],
  'pB': 'Best of the Best'
},
{'id': 6,
'name': 'Knockout',
  'weight': 134,
  'time': new Date('03/14/2018'),
  'day': new Date('03/14/2018'),
  'notes': 'Mock Note Data',
  'typeOfWorkout': [{'id': 1 , 'type': 'Strenth'}],
  'pB': 'Best of the Best'
},
{'id': 7,
'name': 'Knockout',
  'weight': 199,
  'time': new Date('02/09/2018'),
  'day': new Date('02/09/2018'),
  'notes': 'Mock Note Data',
  'typeOfWorkout': [{'id': 1 , 'type': 'Strenth'}],
  'pB': 'Not personal best'
},
{'id': 8,
'name': 'Knockout',
  'weight': 225,
  'time': new Date('08/01/2018'),
  'day': new Date('08/01/2018'),
  'notes': 'Mock Note Data',
  'typeOfWorkout': [{'id': 1 , 'type': 'Strenth'}],
  'pB': 'Strong finish, close but no cookie'
},
{'id': 9,
'name': 'Knockout',
  'weight': 235,
  'time': new Date('03/01/2018'),
  'day': new Date('03/01/2018'),
  'notes': 'Mock Note Data',
  'typeOfWorkout': [{'id': 1 , 'type': 'Strenth'}],
  'pB': 'Best of the Best'
},
{'id': 10,
'name': 'Knockout',
  'weight': 154,
  'time': new Date('11/15/2018'),
  'day': new Date('11/15/2018'),
  'notes': 'Mock Note Data',
  'typeOfWorkout': [{'id': 1 , 'type': 'Strenth'}],
  'pB': 'Best of something'
}
]);
  mocks = this.mock.asObservable();

  ngOnInit() {

  }

  constructor() {

  }

  getImts(mocks): Imt[]  {
    this.mock.next(mocks);
    return MockImt;
  }
}
