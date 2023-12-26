import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss'
})
export class LeagueTableComponent {

  @Input() leagueId : string = '';
}
