import { Component, OnInit } from '@angular/core';
import { WODModel } from '../WODModel';
import { WODType } from '../WODType';
import { WOD } from '../wod';
import { WODEntry } from '../WODEntry';
import { WODEntryItem } from '../WODEntryItem';

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
          id: 0,
          name: '',
          order: '',
          notes: '',
          items: [{ id: 0, notes: '' }]
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

  addEntry(entry): void {
    const count: number = this.Wod.WODEntry.length;
    const newEntry: WODEntry = {id: count,
      name: entry.name ,
      order: entry.order,
      notes: entry.notes,
      items: [{ id: 0, notes: '' }]};

    const clearEntry: WODEntry = {
        id: 0,
        name: '',
        order: '',
        notes: '',
        items: [{ id: 0, notes: '' }]
      };

    this.Wod.WODEntry[count] = newEntry;
    this.outWod.WODEntry[count] = newEntry;
    this.Wod.WODEntry[0] = clearEntry;
  }

  addItem(id, item): void {
    const count: number = this.Wod.WODEntry[id].items.length;
    const newEntry: WODEntryItem = {id: count,
      notes: item.notes};

    const clearEntry: WODEntryItem = {
        id: 0,
        notes: ''};

    this.Wod.WODEntry[id].items[count] = newEntry;
    this.outWod.WODEntry[id].items[count] = newEntry;
    this.Wod.WODEntry[id].items[0] = clearEntry;
  }



  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.outWod);
  }
}
