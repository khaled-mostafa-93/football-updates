import { Component, Input } from '@angular/core';
import { TeamControllerService } from '../../shared/service/team-controller.service';
import { TeamResponse } from '../../shared/model/team/team-response';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrl: './team-results.component.scss'
})
export class TeamResultsComponent {
  @Input() teamId!: number;
  teamFixtures!: TeamResponse[];

  constructor(private teamControllerService: TeamControllerService) { }
  ngOnInit(): void {
    this.teamControllerService.getTeamResults(this.teamId)?.subscribe(res => {
      this.teamFixtures = res.response;
    });
  }
}
