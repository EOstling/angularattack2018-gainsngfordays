import { sample } from 'rxjs/internal/operators';
import { Injectable, OnInit } from '@angular/core';
import { MockImt } from '../MockImt';
import { Imt } from '../imt';

@Injectable({
  providedIn: 'root'
})
export class ImtServiceService implements OnInit {
  IMTS: Imt[];

  ngOnInit() {

  }

  constructor() {

  }

  getImts(): Imt[]  {
    return MockImt;
  }
}
