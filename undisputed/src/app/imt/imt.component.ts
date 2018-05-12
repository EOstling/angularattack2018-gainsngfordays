import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Imt } from '../imt';
import { ImtServiceService } from '../Shared/imt-service.service';
import { MockImt } from '../MockImt';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-imt',
  templateUrl: './imt.component.html',
  styleUrls: ['./imt.component.css']
})
export class IMTComponent implements OnInit,AfterViewInit ,Imt {

  IMTS: Imt[];
    id: 1;
    weight: 230;
    time: Date;
    day: Date;
    workout: 'Navy Seal Workout';
    notes: 'Test';
    pB: 'Best';

    chart =  [];


  canvas: any;
  ctx: any;

  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
          labels: ["New", "In Progress", "On Hold"],
          datasets: [{
              label: '# of Votes',
              data: [1,2,3],
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


  constructor(private ImtServiceService: ImtServiceService) {
    this.id = 1;
    this.weight = 230;
    this.workout = 'Navy Seal Workout';
    this.notes = 'Test';
    this.pB =  'Best';
   }

 

  ngOnInit() {
    this.getIMT();
  }

  getIMT(): void {
    this.IMTS = this.ImtServiceService.getImts();
  }
}
