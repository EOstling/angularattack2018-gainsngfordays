
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import {Workout} from '../../workout';
import {Imt} from '../../imt';


@Component({
  selector: 'app-imt-list-items',
  templateUrl: './imt-list-items.component.html',
  styleUrls: ['./imt-list-items.component.css']
})
export class ImtListItemsComponent implements OnInit {

newWorkOut: string;
 nNotes: string;
 name: string;

  constructor() {
  }

  temp: string;
  @Input() imtWorkouts: string;
  @Output() giveWorkout = new EventEmitter<string>(); // for passing to the parent component

  ngOnInit() {

  }

  NotifyParent(): void {
    this.giveWorkout.emit(this.newWorkOut);
    this.giveWorkout.emit(this.nNotes);
    this.giveWorkout.emit(this.name);
  }
}
