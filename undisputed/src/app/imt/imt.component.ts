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
export class IMTComponent implements OnInit, AfterViewInit , Imt {

  IMTS: Imt[];
    id: 1;
    name: 'Tester';
    weight: 230;
    time: Date;
    day: Date;
    typeOfWorkout: [{'id': 1 , 'type': 'Strength' }];
    notes: 'Test';
    pB: 'Best';

    mock = Array<any>();
    count: number; // counter for service
    chart =  [];
    canvas: any;
    ctx: any;
    @Input() IWorkOuts: string; // proof of concept first for passing data from Child to parent

  // mount the data vis for the graph in lifecyle hook
  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: [ 'New' , 'In Progress', 'On Hold'],
          datasets: [{
              label: '# of Votes',
              data: [1, 2 , 3 ],
              backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
      }
    });
  }
  // inject service
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private ImtServiceService: ImtServiceService) {
    this.id = 1;
    this.weight = 230;
    this.notes = 'Test';
    this.pB =  'Best';
   }

  ngOnInit() {
    this.count = this.mock.length;
    this.ImtServiceService.mocks.subscribe(res => this.mock = res);
    this.getIMT();
  }

  getIMT(): void {
    const given = [];
    this.IMTS = this.ImtServiceService.getImts(this.mock);
    // iterate throught the array
   for (let i = 0; i < this.IMTS.length; i++) {
    console.log('Each Array is at:' + i + this.IMTS);
    JSON.stringify(this.IMTS);
   }
  }
  // PARENT COMPONENT
  // event listener catching info
  // https://dzone.com/articles/understanding-output-and-eventemitter-in-angular
  getFromChild(value) {
    this.IWorkOuts = value;
  }
}
