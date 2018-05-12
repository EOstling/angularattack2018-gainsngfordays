import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-imt-list-items',
  templateUrl: './imt-list-items.component.html',
  styleUrls: ['./imt-list-items.component.css']
})
export class ImtListItemsComponent implements OnInit {

  constructor() { }

  //for gen new forms
  orderForm: FormGroup;
  items: FormArray;
  formBuilder: FormBuilder;

  temp: 'Bench';
  @Input() imtWorkouts: string;
  @Output() giveWorkout = new EventEmitter<string>();//for passing to the parent component

  ngOnInit() {
      this.orderForm = this.formBuilder.group({
      customerName: '',
      email: '',
      items: this.formBuilder.array([ this.createItem() ])
    });
  }

  
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  //creates a form with these specific fields
  createItem(): FormGroup {
    return this.formBuilder.group({
      Workout: '',
      description: '',
      time: ''
    });
  }
  //THIS IS THE CHILD COMPONENT
  //event sending info
  NotifyParent(){
    this.giveWorkout.emit(this.temp);
  }

}
