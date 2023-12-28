import { Routes } from '@angular/router';
import { LeagueMainComponent } from './league/league-main/league-main.component';
import { TeamMainComponent } from './team/team-main/team-main.component';

export const routes: Routes = [

  { path: 'league', component: LeagueMainComponent, pathMatch: "full"},
  { path: 'team/:id', component: TeamMainComponent},
  { path: 'league/:id', component: LeagueMainComponent, pathMatch: "full"},
  { path: '', redirectTo: '/league', pathMatch: "full"},
];
