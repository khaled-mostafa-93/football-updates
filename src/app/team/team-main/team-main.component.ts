import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-main',
  templateUrl: './team-main.component.html',
  styleUrl: './team-main.component.scss'
})
export class TeamMainComponent implements OnInit {
  teamId!: number;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.teamId = param['id'];
    });
  }
}
