import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imt-list-items',
  templateUrl: './imt-list-items.component.html',
  styleUrls: ['./imt-list-items.component.css']
})
export class ImtListItemsComponent implements OnInit {

  constructor() { }

  temp: 'Bench';
  @Input() imtWorkouts: string;
  @Output() giveWorkout = new EventEmitter<string>();//for passing to the parent component

  ngOnInit() {
  }

  //THIS IS THE CHILD COMPONENT
  //event sending info
  NotifyParent(){
    this.giveWorkout.emit(this.temp);
  }

}
