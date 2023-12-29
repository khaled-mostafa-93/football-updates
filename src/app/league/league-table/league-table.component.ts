import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LeagueControllerService } from './../../shared/service/league-controller.service';
import { LeagueStanding } from '../../shared/model/league/league-standing.model';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrl: './league-table.component.scss'
})
export class LeagueTableComponent implements OnChanges {

  @Input() leagueId!: number;
  leagueStandings: LeagueStanding[] = [];

  constructor(private leagueControllerService: LeagueControllerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.leagueControllerService.getLeagueStandings(this.leagueId)?.subscribe(res => {
      this.leagueStandings = res.response[0].league.standings[0];
    });
  }

}
