import { Component, OnInit, AfterViewInit, Output, EventEmitter, Input } from '@angular/core';
import { Imt } from '../imt';
import { ImtServiceService } from '../Shared/imt-service.service';
import { MockImt } from '../MockImt';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-imt',
  templateUrl: './imt.component.html',
  styleUrls: ['./imt.component.css']
})
export class IMTComponent implements OnInit , Imt {

  IMTS: Imt[];
    id: 1;
    name: '';
    weight: 230;
    time: Date;
    day: Date;
    typeOfWorkout: [{'id': 1 , 'type': 'Undefined' }];
    notes: 'Test';
    pB: 'Best';

    mockery = Array<any>();
    count: number; // counter for service
    chart =  [];
    canvas: any;
    ctx: any;
    @Input() IWorkOuts: Array<string> = []; // proof of concept first for passing data from Child to parent

  // inject service
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ImtServiceService: ImtServiceService) {
    this.id = 1;
    this.weight = 230;
    this.notes = 'Test';
    this.pB =  'Best';
   }

  ngOnInit() {
    this.count = this.mockery.length;
    this.ImtServiceService.mocks.subscribe(res => this.mockery = res);
   this.mockery = this.ImtServiceService.getImts(this.mockery);
  }

  getIMT(): string {
    console.log('Inside getIMT' + this.mockery);
    return `{{ this.mockery | lowercase }}`;
  }
  // PARENT COMPONENT
  // event listener catching info
  // https://dzone.com/articles/understanding-output-and-eventemitter-in-angular
  getFromChild(value) {
    this.IWorkOuts = value;
  }
}

