import { Component, OnInit } from '@angular/core';
import { Imt } from '../imt';
import { ImtServiceService } from '../Shared/imt-service.service';
import { MockImt } from '../MockImt';

@Component({
  selector: 'app-imt',
  templateUrl: './imt.component.html',
  styleUrls: ['./imt.component.css']
})
export class IMTComponent implements OnInit, Imt {
  IMTS: Imt[];
    id: 1;
    weight: 230;
    time: Date;
    Date: Date;
    workout: 'Navy Seal Workout';
    notes: 'Test';
    pB: 'Best';

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
