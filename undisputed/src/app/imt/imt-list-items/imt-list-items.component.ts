
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

  constructor() {
  }

  temp: string;
  @Input() imtWorkouts: string;
  @Output() giveWorkout = new EventEmitter<string>(); // for passing to the parent component
  ngOnInit() {
  }

  // THIS IS THE CHILD COMPONENT
  // event sending info
  NotifyParent(): void {
    this.giveWorkout.emit('Workouts');
  }
