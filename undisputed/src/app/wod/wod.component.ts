import { Component, OnInit } from '@angular/core';
import { WODModel} from '../WODModel';
import { WODService } from '../Shared/wod.service';

@Component({
  selector: 'app-wod',
  templateUrl: './wod.component.html',
  styleUrls: ['./wod.component.css']
})
export class WODComponent implements OnInit {
  WODS: WODModel[];

  constructor(private wodService: WODService) { }

  ngOnInit() {
    this.getWODs();
  }

  getWODs(): void {
    this.WODS = this.wodService.getHeroes();
  }
}
