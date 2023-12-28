import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMainComponent } from './team-main/team-main.component';
import { TeamResultsComponent } from './team-results/team-results.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TeamMainComponent,
    TeamResultsComponent,
  ],
  imports: [
  CommonModule,
  RouterModule,
  ],
  exports:[
    TeamMainComponent
  ]
})
export class TeamModule { }
