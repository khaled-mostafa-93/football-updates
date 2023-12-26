import { Routes, RouterModule } from '@angular/router';
import { LeagueTableComponent } from './league-table/league-table.component';

const routes: Routes = [
  { path: ':id', component: LeagueTableComponent

  },
];

export const LeagueRoutes = RouterModule.forChild(routes);
