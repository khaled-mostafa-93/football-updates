import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-league-main',
  templateUrl: './league-main.component.html',
  styleUrl: './league-main.component.scss'
})
export class LeagueMainComponent {
  leagueId!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      this.leagueId = param['id'];
    });
  }
}


