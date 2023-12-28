import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../shared/model/country.model';
import { CountryControllerService } from './../../shared/service/country-controller.service';

@Component({
  selector: 'app-league-countries',
  templateUrl: './league-countries.component.html',
  styleUrl: './league-countries.component.scss'
})
export class LeagueCountriesComponent implements OnInit {
  @Input() selectedId! : number;

  countries! : Country[];

  constructor(private countryControllerService: CountryControllerService){}
  ngOnInit(): void {
    this.countryControllerService.getCountries().subscribe(res => {
      this.countries = res;
    });
  }




}
