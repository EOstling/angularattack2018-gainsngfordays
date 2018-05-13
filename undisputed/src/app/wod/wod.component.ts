import { Component, OnInit, Input } from '@angular/core';
import { WODModel} from '../WODModel';
import { WODService } from '../Shared/wod.service';

@Component({
  selector: 'app-wod',
  templateUrl: './wod.component.html',
  styleUrls: ['./wod.component.css']
})
export class WODComponent implements OnInit {
  WODS: WODModel[];
  @Input() WorkingWod: WODModel;
  @Input() showWods: true;

  constructor(private wodService: WODService) { }

  ngOnInit() {
    this.getWODs();
  }

  getWODs(): void {
    if (this.showWods) {
      this.WODS = this.wodService.getWods();
    }
  }
  get diagnostic() {
    return JSON.stringify(this.WorkingWod);
  }
}
