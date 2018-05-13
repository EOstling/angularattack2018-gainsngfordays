import { Component, OnInit, Input } from '@angular/core';
import { WODModel} from '../WODModel';
import { WODService } from '../Shared/wod.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-wod',
  templateUrl: './wod.component.html',
  styleUrls: ['./wod.component.css']
})
export class WODComponent implements OnInit {
  WODS: WODModel[];
  @Input() WorkingWod: WODModel;
  @Input() showWods: string;

  constructor(private wodService: WODService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // this.showWods = this.route.params.value.showWods;
    this.getWODs();
  }

  getWODs(): void {
    if (this.showWods === 'true') {
      this.WODS = this.wodService.getWods();
    }
  }
  get diagnostic() {
    return JSON.stringify(this.WorkingWod);
  }
}
