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
}
]);
  mocks = this.mock.asObservable();

  ngOnInit() {

  }

  constructor() {

  }

  getImts(mocks): Imt[]  {
    this.mock.next(mocks);
    return mocks;
  }
}
