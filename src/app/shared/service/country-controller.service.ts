import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../model/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryControllerService {
  private countriesUrl: string = '/assets/data/countries.json';
   constructor(private httpClient: HttpClient ){
   }


  getCountries(): Observable<Country[]> {
   return this.httpClient.get<Country[]>(this.countriesUrl);
  }

}
