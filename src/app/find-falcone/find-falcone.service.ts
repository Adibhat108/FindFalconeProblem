import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../token-torage.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FindFalconeService {
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
        const a = this.http.get<any>(this.planetsApi, { observe: 'response' });
        console.log('service call==> ==> ==> =!= ~= ***');
        console.log(a);
        return a;
        return null;
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