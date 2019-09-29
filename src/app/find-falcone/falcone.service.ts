import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../token-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FalconeService {
  private token:string;
  private tokenApi = "https://findfalcone.herokuapp.com/token";
  private planetsApi = "https://findfalcone.herokuapp.com/planets";
  private vehiclesApi = "https://findfalcone.herokuapp.com/vehicles";
  private sendTroupesApi = "https://findfalcone.herokuapp.com/find";

  constructor(
      protected http: HttpClient,
      protected tokenStorageService: TokenStorageService,
      ) {}

  getPlanets(): Observable<any> {
      return this.http.get<any>(this.planetsApi, { observe: 'response' });
  }

  getVehicles(): Observable<any> {
      return this.http.get<any>(this.vehiclesApi, { observe: 'response' });
  }
      
//   getPlanets(): Observable<any> {
//     return this.http.post<any>(this.resourceUrl, bankAccount, { observe: 'response' });
//   }

//   getVehicles(bankAccount: IBankAccount): Observable<EntityResponseType> {
//     return this.http.put<IBankAccount>(this.resourceUrl, bankAccount, { observe: 'response' });
//   }

//   find(id: number): Observable<EntityResponseType> {
//     return this.http.get<IBankAccount>(`${this.resourceUrl}/${id}`, { observe: 'response' });
//   }

}

