import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrl: './team-results.component.scss'
})
export class TeamResultsComponent {
  @Input() teamId: string = '';

}
