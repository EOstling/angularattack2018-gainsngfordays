import { Component, OnInit } from '@angular/core';
import { WODModel } from '../WODModel';
import { WODType } from '../WODType';
import { WOD } from '../wod';

@Component({
  selector: 'app-wod-admin',
  templateUrl: './wod-admin.component.html',
  styleUrls: ['./wod-admin.component.css']
})
export class WodAdminComponent implements OnInit {
  Wod: WODModel;
  Types: WODType[];
  outWod: WODModel;
  constructor() {}

  ngOnInit() {
    this.Wod = {
      id: 1,
      WOD: {
        id: 1,
        day: new Date('01/01/2018'),
        type: { id: 1, name: '' }
      },
      WODEntry: [
        {
          id: 1,
          name: '',
          order: '',
          notes: '',
          items: [{ id: 1, notes: '' }]
        }
      ]
    };
    this.loadTypes();
  }

  loadTypes(): void {
    this.Types = [{ id: 1, name: 'WOD' }, { id: 2, name: 'uFit' }];
  }
  loadWod(): void {
    this.outWod = this.Wod;
  }
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.outWod);
  }
}
