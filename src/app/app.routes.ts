import { Routes } from '@angular/router';
import { LeagueMainComponent } from './league/league-main/league-main.component';
import { TeamMainComponent } from './team/team-main/team-main.component';
import { LeagueTableComponent } from './league/league-table/league-table.component';

export const routes: Routes = [
  { path: '', component: LeagueMainComponent},
  { path: 'league/:id', component: LeagueMainComponent},
  { path: 'team/:id', component: TeamMainComponent},
];
