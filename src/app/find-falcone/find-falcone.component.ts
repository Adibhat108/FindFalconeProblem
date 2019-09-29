import { Component, OnInit } from '@angular/core';
import { FalconeService } from './falcone.service';
import { Planet } from './planet.model';
import { Vehicle } from './vehicle.model';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-find-falcone',
  templateUrl: './find-falcone.component.html',
  styleUrls: ['./find-falcone.component.sass']
})
export class FindFalconeComponent implements OnInit {

  constructor(
    protected findFalconeService: FalconeService,
  ) { }

  planets: Planet[] = [];
  vehicles: Vehicle[] = [];

  getVehicles() {
    this.findFalconeService.getVehicles()
      .pipe(
        filter((res: HttpResponse<Vehicle[]>) => res.ok),
        map((res: HttpResponse<Vehicle[]>) => res.body)
      )
      .subscribe(
        (res: Vehicle[]) => {
          this.vehicles = res;
        },
        (res: HttpErrorResponse) => console.error(res.message)
      );
  }

  getPlanets() {
    this.findFalconeService.getPlanets()
      .pipe(
        filter((res: HttpResponse<Planet[]>) => res.ok),
        map((res: HttpResponse<Planet[]>) => res.body)
      )
      .subscribe(
        (res: Planet[]) => {
          this.planets = res;
          console.table(this.planets);

        },
        (res: HttpErrorResponse) => console.error(res.message)
      );
  }

  ngOnInit() {

    this.getPlanets();
    
    this.getVehicles();
    
  }

}
