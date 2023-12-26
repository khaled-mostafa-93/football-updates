import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LeagueModule } from './league/league.module';
import { TeamModule } from './team/team.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, LeagueModule, TeamModule]
})
export class AppComponent {
  title = 'football-updates';
}
