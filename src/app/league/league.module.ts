import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueMainComponent } from './league-main/league-main.component';
import { LeagueCountriesComponent } from './league-countries/league-countries.component';
import { LeagueTableComponent } from './league-table/league-table.component';



@NgModule({
  declarations: [
    LeagueMainComponent,
    LeagueCountriesComponent,
    LeagueTableComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LeagueMainComponent
  ]
})
export class LeagueModule { }
