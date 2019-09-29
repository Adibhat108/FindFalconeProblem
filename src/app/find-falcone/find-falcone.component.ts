import { Component, OnInit } from '@angular/core';
import { FindFalconeService } from './find-falcone.service';

@Component({
  selector: 'app-find-falcone',
  templateUrl: './find-falcone.component.html',
  styleUrls: ['./find-falcone.component.sass']
})
export class FindFalconeComponent implements OnInit {

  constructor(
    protected findFalconeService: FindFalconeService,
  ) { }

  ngOnInit() {
    this.findFalconeService.getPlanets();
  }

}
