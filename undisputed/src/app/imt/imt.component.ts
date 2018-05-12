import { Component, OnInit } from '@angular/core';
import { Imt } from '../imt';

@Component({
  selector: 'app-imt',
  templateUrl: './imt.component.html',
  styleUrls: ['./imt.component.css']
})
export class IMTComponent implements OnInit, Imt {

  
  weight: 0;
  time: Date;
  Date: Date;
  workout: '';
  notes: '';
  pB: '';

  constructor() {
    
   }

  ngOnInit() {
  }

  

}
