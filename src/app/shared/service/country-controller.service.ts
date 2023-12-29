import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Country } from '../model/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryControllerService {
  private countriesUrl: string = '/assets/data/countries.json';
   constructor(private httpClient: HttpClient ){
   }
   private countriesObservable! : Observable<Country[]>

  getCountries(): Observable<Country[]> {
    if(!this.countriesObservable){
      this.countriesObservable =  this.httpClient.get<Country[]>(this.countriesUrl).pipe(shareReplay(1))
    }

    return this.countriesObservable;
  }

}
