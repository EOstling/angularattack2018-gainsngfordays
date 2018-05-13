import { Injectable } from '@angular/core';
import { MockWods } from '../MockWODS';
import { WODModel } from '../WODModel';

@Injectable({
  providedIn: 'root'
})
export class WODService {

  constructor() { }
  getWods(): WODModel[] {
    return MockWods;
  }
}
