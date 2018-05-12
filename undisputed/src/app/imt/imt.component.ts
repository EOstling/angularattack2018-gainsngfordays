import { Component, OnInit } from '@angular/core';
import { Imt } from '../imt';

@Component({
  selector: 'app-imt',
  templateUrl: './imt.component.html',
  styleUrls: ['./imt.component.css']
})
export class IMTComponent implements OnInit, Imt {

    
    weight: 230;
    time: Date;
    Date: Date;
    workout: 'Navy Seal Workout';
    notes: 'Test';
    pB: 'Best';

  constructor() {
    this.weight = 230;
    this.workout = 'Navy Seal Workout';
    this.notes = 'Test';
    this.pB =  'Best';
   }

  ngOnInit() {
  }



}
