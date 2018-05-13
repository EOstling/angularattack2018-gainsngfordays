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

  private mock = new BehaviorSubject<any>(['Freestyle', 'Benchpress', 'Squats', '400m Swim', 'Triathalon']);
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
